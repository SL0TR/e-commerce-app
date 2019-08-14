async function updateItem(parent, args, ctx, info) {
  //first take a copy of the updates
  const updates = { ...args };
  // remove the ID from the updates
  delete updates.id;
  // run the update mthod
  return ctx.db.mutation.updateItem(
    {
      data: updates,
      where: {
        id: args.id
      }
    },
    info
  );
}

exports.updateItem = updateItem;
