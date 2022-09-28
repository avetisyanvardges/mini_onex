import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';
import { Button, DarkTheme, LightTheme } from 'assets/Theme';

const initialState = {
  theme: { ...LightTheme },
  buttonColor: { ...Button },
};
export default (state = initialState, { type }) => {
  switch (type) {
    case DARK_THEME:
      return {
        ...state,
        theme: { ...DarkTheme },
        buttonColor: { ...Button },
      };
    case LIGHT_THEME:
      return {
        ...state,
        theme: { ...LightTheme },
        buttonColor: { ...Button },
      };
    default:
      return state;
  }
};
