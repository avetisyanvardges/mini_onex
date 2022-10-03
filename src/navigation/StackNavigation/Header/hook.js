import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Styles } from './styles';

function useContainer() {
  const { theme, mode } = useSelector(({ themes }) => themes);
  const [settingsVisible, setSettingsVisible] = useState(false);

  const styles = Styles(theme, mode);

  return {
    styles,
    theme,
    settingsVisible,
    setSettingsVisible,
    mode,
  };
}

export default useContainer;
