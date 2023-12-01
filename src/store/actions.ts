import { Attribute4 } from "../components/selectedspot/Selectedspot";
import { Screens } from "../types/navigation";
import { Product } from "../types/products";
import { Spot } from "../types/spot";
import {
  Actions,
  NoneAction,
  SelectSpotAction,
  SomeActions,
} from "../types/store";
import firebase from "../utils/firebase/firebase";

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const saveProduct = async (product: Product): Promise<Actions> => {
  await firebase.saveProductInDB(product);
  return {
    type: SomeActions.SAVE_COMMENT,
    payload: product,
  };
};

export const getProducts = async (): Promise<Actions> => {
  const products = await firebase.getProductsFromDB();
  return {
    type: SomeActions.GET_COMMENT,
    payload: products,
  };
};

export const selectSpot = (spot: Spot): Actions => {
  return {
    type: SomeActions.SELECT_SPOT,
    payload: spot,
  };
};