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

export enum SomeActions {
  "SAVE_COMMENT" = "SAVE_COMMENT",
  "GET_COMMENT" = "GET_COMMENT",
  "SELECT_SPOT" = "SELECT_SPOT",
  "NONE" = "NONE",
}

export interface SaveProductAction {
  type: SomeActions.SAVE_COMMENT;
  payload: Product;
}

export interface GetProductAction {
  type: SomeActions.GET_COMMENT;
  payload: Product[];
}

export interface SelectSpotAction {
  type: SomeActions.SELECT_SPOT;
  payload: Spot;
}

export interface NoneAction {
  type: SomeActions.NONE;
  payload: {};
}

export type Actions =
  | { type: ScreenActions; payload: string }
  | { type: SomeActions.SAVE_COMMENT; payload: Product }
  | { type: SomeActions.GET_COMMENT; payload: Product[] }
  | { type: SomeActions.SELECT_SPOT; payload: Spot }
  | { type: SomeActions.NONE; payload: {} };