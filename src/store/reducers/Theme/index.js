import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';
import { Button, DarkTheme, LightTheme } from 'assets/Theme';

const initialState = {
  theme: { ...LightTheme },
  buttonColor: { ...Button },
  mode: LIGHT_THEME,
};
export default (state = initialState, { type }) => {
  switch (type) {
    case DARK_THEME:
      return {
        ...state,
        theme: { ...DarkTheme },
        buttonColor: { ...Button },
        mode: DARK_THEME,
      };
    case LIGHT_THEME:
      return {
        ...state,
        theme: { ...LightTheme },
        buttonColor: { ...Button },
        mode: LIGHT_THEME,
      };
    default: {
      return state;
    }
  }
};
