import { Screens } from "../types/navigation";
import { Product } from "../types/products";
import { Actions, someActions } from "../types/store";
import firebase from "../utils/firebase/firebase";

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen
    }
};

export const saveProduct = async (product: Product): Promise<Actions> => {
    await firebase.saveProductInDB(product);
    return {
      action: someActions.SAVE_COMMENT,
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