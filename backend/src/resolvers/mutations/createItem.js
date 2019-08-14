async function createItem(parent, args, ctx, info) {
  if (!ctx.request.userId) {
    throw new Error("You must be logged in to do that!");
  }
  const item = await ctx.db.mutation.createItem(
    {
      data: {
        // this is how we create a relatiosnhsip between the item and the user
        user: {
          connect: {
            id: ctx.request.userId
          }
        },
        ...args
      }
    },
    info
  );

  return item;
}

exports.createItem = createItem;
