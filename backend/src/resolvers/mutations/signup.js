const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// constant values
const jwtTokenExpiryTime = 1000 * 60 * 60 * 24 * 365;
const tokenTimeLimit = 3600000;

async function signup(parent, args, ctx, info) {
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
}
exports.signup = signup;
