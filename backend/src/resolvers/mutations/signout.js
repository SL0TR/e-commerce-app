function signout(parent, args, ctx, info) {
  ctx.response.clearCookie("token");
  return { message: "Sayonara" };
}

exports.signout = signout;
