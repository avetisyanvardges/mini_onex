import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Styles } from 'screens/AuthScreens/styles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [passwordShow, setPasswordShow] = useState(false);
  const [state] = useState({
    email: 'test@gmail.com',
    password: '123456vV$',
  });
  const styles = Styles(theme);

  return { state, passwordShow, setPasswordShow, styles, theme };
}

export default useContainer;
