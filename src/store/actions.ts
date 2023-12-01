import { Attribute4 } from "../components/selectedspot/Selectedspot";
import { Screens } from "../types/navigation";
import { Product } from "../types/products";
import { Spot } from "../types/spot";
import {
  Actions,
  noneAction,
  selectSpotAction,
  someActions,
} from "../types/store";
import firebase from "../utils/firebase/firebase";

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const saveProduct = (product: Product): Actions => {
  firebase.saveProductInDB(product);
  return {
    type: someActions.SAVE_COMMENT,
    payload: product,
  };
};

export const getProducts = async (): Promise<Actions> => {
  const products = await firebase.getProductsFromDB();
  return {
    action: someActions.GET_COMMENT,
    payload: products,
  };
};

export const selectSpot = (spot: Spot): Actions => {
  return {
    type: someActions.SELECT_SPOT,
    payload: spot,
  };
};