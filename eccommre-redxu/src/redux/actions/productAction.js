import { ActionTypes } from "../contants/action-types";

export const setProcducts = (AllProducts) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: AllProducts,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
