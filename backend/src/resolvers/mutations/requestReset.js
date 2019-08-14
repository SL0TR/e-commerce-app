const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../../mail");

async function requestReset(parent, args, ctx, info) {
  //check if this is a real user

  const user = await ctx.db.query.user({ where: { email: args.email } });
  if (!user) {
    throw new Error(`No such user exists with ${args.email}`);
  }

  //set a reset token and expiry on that user

  const randomByetesPromisified = promisify(randomBytes);
  const resetToken = (await randomByetesPromisified(20)).toString("hex");
  const resetTokenExpiry = Date.now() + tokenTimeLimit; //1 hour from now;
  const res = await ctx.db.mutation.updateUser({
    where: { email: args.email },
    data: { resetToken, resetTokenExpiry }
  });

  //email them that reset token.
  const mailRes = await transport.sendMail({
    from: "yomaimsj@gmail.com",
    to: user.email,
    subject: "Your Password Reset Token",
    html: makeANiceEmail(
      `Your Password Reset Token is here! \n\n <a href="${
        process.env.FRONTEND_URL
      }/reset?resetToken=${resetToken}">Click Here to Reset Password!`
    )
  });

  //return the message
  return { message: "Thanks!" };
}

exports.requestReset = requestReset;
