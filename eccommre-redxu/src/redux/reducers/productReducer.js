import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (
  state = INITIAL_STATE.products,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    default:
      return state;
  }
};
// case ActionTypes.REMOVE_SELECTED_PRODUCT:
//   return { ...state, selectedProduct: null };
//
