// Mutations
const { createItem } = require("./mutations/createItem");
const { updateItem } = require("./mutations/updateItem");
const { deleteItem } = require("./mutations/deleteItem");
const { signup } = require("./mutations/signup");
const { signin } = require("./mutations/signin");
const { signout } = require("./mutations/signout");
const { requestReset } = require("./mutations/requestReset");
const { resetPassword } = require("./mutations/resetPassword");
const { updatePermissions } = require("./mutations/updatePermissions");
const { addToCart } = require("./mutations/addToCart");
const { removeFromCart } = require("./mutations/removeFromCart");

const Mutation = {
  createItem,
  updateItem,
  deleteItem,
  signup,
  signin,
  signout,
  requestReset,
  resetPassword,
  updatePermissions,
  addToCart,
  removeFromCart
};

module.exports = Mutation;
