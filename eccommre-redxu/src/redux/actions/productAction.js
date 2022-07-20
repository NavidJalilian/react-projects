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

export const setIsLoding = (isLoading) => {
  return {
    type: ActionTypes.SET_PRODUCTS_LOADING,
    payload: isLoading,
  };
};
