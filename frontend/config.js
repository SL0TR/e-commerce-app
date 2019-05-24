import { transitions, positions } from "react-alert";

// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = `http://localhost:4444`;
export const perPage = 6;

// optional cofiguration
export const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};
