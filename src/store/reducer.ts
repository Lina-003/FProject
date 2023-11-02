import { Actions, AppState } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {

  const { action, payload } = currentAction;
  switch (action) {
    case 'CHANGE_SCREEN':
      return {
        ...currentState,
        currentScreen: payload, 
      };

    default:
      return currentState;
  }
};
