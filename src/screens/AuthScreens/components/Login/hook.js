import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Styles } from 'screens/AuthScreens/styles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [passwordShow, setPasswordShow] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const styles = Styles(theme);

  return { state, passwordShow, setPasswordShow, setState, styles, theme };
}

export default useContainer;
