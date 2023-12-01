import { Actions, AppState, someActions } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
  const { type, payload } = currentAction;

  switch (type) {
    case "NAVIGATE":
      currentState.screen = payload;
      break;

    case someActions.SAVE_COMMENT:
      currentState.products = [...currentState.products, payload];
      return currentState;

    case someActions.GET_COMMENT:
      currentState.products = payload;
      return currentState;

    case someActions.SELECT_SPOT:
      currentState.selectedSpot = payload;
      break;

    default:
      return currentState;
  }
  return currentState;
};