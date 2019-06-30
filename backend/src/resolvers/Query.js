const { forwardTo } = require("prisma-binding");
const { hasPermissions } = require("../utils");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    //check if there's a current userId
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // check if they're login
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }

    //checkj if the user has the permissions to query all the users
    hasPermissions(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    //if they do queyr all the users!
    return ctx.db.users({}, info);
  }
};

module.exports = Query;
