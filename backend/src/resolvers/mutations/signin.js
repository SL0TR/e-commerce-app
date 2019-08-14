const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// constant values
const jwtTokenExpiryTime = 1000 * 60 * 60 * 24 * 365;
const tokenTimeLimit = 3600000;

async function signin(parent, { email, password }, ctx, info) {
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
}

exports.signin = signin;
