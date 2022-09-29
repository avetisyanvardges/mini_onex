import { Styles } from './styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginScreen } from 'screens/Auth/components/Login';
import { RegistrationScreen } from 'screens/Auth/components/Registration';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const styles = Styles(theme);
  const [activeTab, setActiveTab] = useState('login');
  const content = {
    login: <LoginScreen />,
    signUp: <RegistrationScreen />,
  };

  return { activeTab, setActiveTab, content, styles, theme };
}

export default useContainer;
