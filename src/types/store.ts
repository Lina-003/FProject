export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  currentScreen: string; 
};

export enum ScreenActions {
  CHANGE_SCREEN = 'CHANGE_SCREEN', 
}

export interface ChangeScreenAction {
  action: ScreenActions.CHANGE_SCREEN;
  payload: string;
}

export type Actions = ChangeScreenAction;
