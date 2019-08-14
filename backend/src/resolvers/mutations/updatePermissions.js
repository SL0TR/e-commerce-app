const { hasPermission } = require("../../utils");

async function updatePermissions(parent, args, ctx, info) {
  //check if they are logged in

  if (!ctx.request.userId) {
    throw new Error("You must be logged in!");
  }

  //query the current user

  const currentUser = await ctx.db.query.user(
    {
      where: {
        id: ctx.request.userId
      }
    },
    info
  );

  //check if the user has correct permission

  hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);

  //update the permissioon

  return ctx.db.mutation.updateUser(
    {
      data: {
        permissions: {
          set: args.permissions
        }
      },
      where: {
        id: args.userId
      }
    },
    info
  );
}

exports.updatePermissions = updatePermissions;
