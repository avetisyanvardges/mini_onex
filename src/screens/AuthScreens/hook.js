import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginScreen } from './components/Login';
import { RegistrationScreen } from './components/Registration';
import { Styles } from './styles';

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
