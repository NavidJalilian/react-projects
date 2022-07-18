import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE = {
  products: [{ id: 1, name: "Product 1", price: "100" }],
};

export const productReducer = (
  state = INITIAL_STATE.products,
  { type, action }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return action.payload;
    case ActionTypes.SELECTED_PRODUCT:
      return action.payload;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
