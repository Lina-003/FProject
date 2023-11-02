import { ScreenActions } from '../types/store';

export const changeScreen = (payload: any) => {
  return {
    action: ScreenActions.CHANGE_SCREEN,
    payload,
  };
};
