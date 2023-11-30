import { Product } from "./products";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
  products: Product[];
  screen: string;
}

export enum ScreenActions {
  "NAVIGATE" = "NAVIGATE",
}

export enum someActions {
  "SAVE_COMMENT" = "SAVE_COMMENT",
  "GET_COMMENT" = "GET_COMMENT",
}

export interface saveProductAction {
  action: someActions.SAVE_COMMENT;
  payload: Product,  
}

export interface getProductAction {
  action: someActions.GET_COMMENT;
  payload: Product[],  
}

export type Actions = ScreenActions | saveProductAction | getProductAction;