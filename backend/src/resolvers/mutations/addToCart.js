async function addToCart(parent, args, ctx, info) {
  // make sure user is signed in

  const { userId } = ctx.request;
  if (!userId) {
    throw new Error("You must be signed in!");
  }

  // query the users current cart
  const [existingCartItem] = await ctx.db.query.cartItems({
    where: {
      user: { id: userId },
      item: { id: args.id }
    }
  });

  // check if the item is already in their cart and increament by 1 if it is

  if (existingCartItem) {
    return ctx.db.mutation.updateCartItem(
      {
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 }
      },
      info
    );
  }

  //if its not create a frest cartitem for the user

  return ctx.db.mutation.createCartItem(
    {
      data: {
        user: {
          connect: {
            id: userId
          }
        },
        item: {
          connect: {
            id: args.id
          }
        }
      }
    },
    info
  );
}

exports.addToCart = addToCart;
