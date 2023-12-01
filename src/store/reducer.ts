import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
  const {type, payload} = actions

  switch (type) {
    case "NAVIGATE":
      state.screen = payload;
      break;

    case SomeActions.SAVE_COMMENT:
      state.products = [...state.products, payload];
      return state;

    case SomeActions.GET_COMMENT:
      state.products = payload;
      return state;

    case SomeActions.SELECT_SPOT:
      state.selectedSpot = payload;
      break;

    default:
      return state;
  }
  return state;
};