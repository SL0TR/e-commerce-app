const stripe = require("../../stripe");

async function createOrder(parent, args, ctx, info) {
  // Query the current user and make sure they are signed in
  const { userId } = ctx.request;
  if (!userId) {
    throw new Error("You must be signed in to complete this order");
  }

  const user = await ctx.db.query.user(
    { where: { id: userId } },
    `{
      id name email cart { 
        id quantity item  { 
          title price id description image largeImage
        }
      }
    }`
  );

  // Recalculate the total for the price
  // console.dir(user, { depth: null });
  const amount =
    user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    ) * 100;
  console.log(`Going to charge total amount ${amount}`);
  // Create the stripe charge

  const charge = await stripe.charges.create({
    amount,
    currency: "BDT",
    source: args.token
  });

  // Convert the cartitems the orderitems
  const orderItems = user.cart.map(cartitem => {
    const { quantity } = cartitem;
    const orderItem = {
      quantity,
      user: { connect: { id: userId } },
      ...cartitem.item
    };
    delete orderItem.id;
    return orderItem;
  });

  // Create the order
  const order = await ctx.db.mutation.createOrder({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } }
    }
  });

  // Clean up - clear the users cart, delete cartItems
  const cartItemIds = user.cart.map(cartItem => cartItem.id);
  await ctx.db.mutation.deleteManyCartItems({
    where: {
      id_in: cartItemIds
    }
  });

  //Return the Order to the client
  return order;
}

exports.createOrder = createOrder;
