async function removeFromCart(parent, args, ctx, info) {
  console.log("triggered");
  // find the cart item
  const where = { id: args.id };
  const cartItem = await ctx.db.query.cartItem({ where }, `{id, user { id }}`);

  // make sure we found item
  if (!cartItem) {
    throw new Error("No Cart Item Found!");
  }

  // make sure they own that cart item
  if (cartItem.user.id !== ctx.request.userId) {
    throw new Error(`This item doesn't belong to the user`);
  }

  //delete that cart item
  return ctx.db.mutation.deleteCartItem(
    {
      where
    },
    info
  );
}
exports.removeFromCart = removeFromCart;
