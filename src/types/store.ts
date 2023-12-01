import { Attribute4 } from "../components/selectedspot/Selectedspot";
import { Product } from "./products";
import { Spot } from "./spot";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
  screen: string;
  selectedSpot: Spot;
};

export enum ScreenActions {
  "NAVIGATE" = "NAVIGATE",
}

export enum someActions {
  "SAVE_COMMENT" = "SAVE_COMMENT",
  "GET_COMMENT" = "GET_COMMENT",
  "SELECT_SPOT" = "SELECT_SPOT",
  "NONE" = "NONE",
}

export interface saveProductAction {
  type: someActions.SAVE_COMMENT;
  payload: Product;
}

export interface getProductAction {
  action: someActions.GET_COMMENT;
  payload: Product[];
}

export interface selectSpotAction {
  type: someActions.SELECT_SPOT;
  payload: Spot;
}

export interface noneAction {
  type: someActions.NONE;
  payload: {};
}

export type Actions =
  | ScreenActions
  | saveProductAction
  | getProductAction
  | selectSpotAction
  | noneAction;