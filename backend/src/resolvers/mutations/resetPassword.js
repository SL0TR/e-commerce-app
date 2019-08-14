const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// constant values
const jwtTokenExpiryTime = 1000 * 60 * 60 * 24 * 365;
const tokenTimeLimit = 3600000;

async function resetPassword(parent, args, ctx, info) {
  // check if its a legit reset token
  // check if its expired
  const [user] = await ctx.db.query.users({
    where: {
      resetToken: args.resetToken,
      resetTokenExpiry_gte: Date.now() - tokenTimeLimit
    }
  });
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

exports.resetPassword = resetPassword;
