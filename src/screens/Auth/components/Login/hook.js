import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Styles } from 'screens/Auth/styles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [passwordShow, setPasswordShow] = useState(false);
  const [state] = useState({
    email: '',
    password: '',
  });
  const styles = Styles(theme);

  return { state, passwordShow, setPasswordShow, styles, theme };
}

export default useContainer;