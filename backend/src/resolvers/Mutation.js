const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const tokenTimeLimit = 3600000;
const jwtTokenExpiryTime = 1000 * 60 * 60 * 24 * 365;
const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem(parent, args, ctx, info) {
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
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };

    //find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`);

    //check if the own that item or have the permission
    // TODO

    // delete it.
    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, ctx, info) {
    //lowercase email
    args.email = args.email.toLowerCase();
    //hash password
    const password = await bcrypt.hash(args.password, 10);
    //create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    //create the JWT token to log in
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: jwtTokenExpiryTime
    });
    //lastly return the user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    //check if the user exists
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user exists with ${email}`);
    }

    //check if the users password is corrct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Wrong Password!`);
    }

    //generate JWT token for the user
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    //set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: jwtTokenExpiryTime
    });

    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Sayonara" };
  },
  async requestReset(parent, args, ctx, info) {
    //1.check if this is a real user

    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user exists with ${args.email}`);
    }
    //2. set a reset token and expiry on that user
    const randomByetesPromisified = promisify(randomBytes);
    const resetToken = (await randomByetesPromisified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + tokenTimeLimit; //1 hour from now;
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    return { message: "Thanks!" };

    //3. Email them that reset token.
  },
  async resetPassword(parent, args, ctx, info) {
    // check if its a legit reset token
    // check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - tokenTimeLimit
      }
    });
    console.log(user);
    if (!user) {
      throw new Error(`This token is either invalid or expired`);
    }

    // hash their new password
    const password = await bcrypt.hash(args.password, 10);

    // save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    // Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    //set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: jwtTokenExpiryTime
    });

    // return the new user
    return updatedUser;
  }
};

module.exports = Mutation;
