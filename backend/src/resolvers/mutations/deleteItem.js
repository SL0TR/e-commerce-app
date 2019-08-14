async function deleteItem(parent, args, ctx, info) {
  const where = { id: args.id };

  //find the item
  const item = await ctx.db.query.item({ where }, `{ id title  user { id }}`);

  //check if the own that item or have the permission
  // TODO

  const ownsItem = (item.user.id = ctx.request.userId);

  const hasPermissions = ctx.request.user.permissions.some(permission =>
    ["ADMIN", "ITEMDELETE"].includes(permission)
  );

  if (!ownsItem && !hasPermissions) {
    throw new Error(`You don't have permission to delete`);
  }

  // delete it.
  return ctx.db.mutation.deleteItem({ where }, info);
}

exports.deleteItem = deleteItem;
