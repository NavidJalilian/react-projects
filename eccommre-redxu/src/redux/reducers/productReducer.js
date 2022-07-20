import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
  isLoading: false,
};

export const productReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    case ActionTypes.SET_PRODUCTS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
// case ActionTypes.REMOVE_SELECTED_PRODUCT:
//   return { ...state, selectedProduct: null };
//
