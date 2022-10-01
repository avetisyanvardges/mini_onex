import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import dispatch from 'helper/dispatch/dispatch';
import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';
import { useSelector } from 'react-redux';

function useCheckTheme() {
  const { mode } = useSelector(({ themes }) => themes);
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    if (isDarkMode || mode === DARK_THEME) {
      dispatch(DARK_THEME);
    } else {
      dispatch(LIGHT_THEME);
    }
  }, []);
}

export { useCheckTheme };
