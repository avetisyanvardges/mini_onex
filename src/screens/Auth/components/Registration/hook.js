import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Styles } from 'screens/Auth/styles';
import { userRoles } from 'constants/userRoles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [role, setRole] = useState(userRoles.USER);
  const [state] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const styles = Styles(theme);

  return {
    state,
    styles,
    theme,
    passwordShow,
    confirmPassShow,
    setConfirmPassShow,
    setPasswordShow,
    role,
    setRole,
  };
}

export default useContainer;
