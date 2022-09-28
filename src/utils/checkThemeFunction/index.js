import React from 'react';
import { useColorScheme } from 'react-native';
import dispatch from 'helper/dispatch/dispatch';
import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';

function useCheckTheme() {
  const isDarkMode = useColorScheme() === 'dark';
  if (isDarkMode) {
    dispatch(DARK_THEME);
  } else {
    dispatch(LIGHT_THEME);
  }
}

export { useCheckTheme };
