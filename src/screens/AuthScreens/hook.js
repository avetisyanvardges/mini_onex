import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginScreen } from './components/Login';
import { RegistrationScreen } from './components/Registration';
import { Styles } from './styles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [activeTab, setActiveTab] = useState('login');
  const styles = Styles(theme, activeTab);
  const content = {
    login: <LoginScreen />,
    signUp: <RegistrationScreen />,
  };

  return { activeTab, setActiveTab, content, styles, theme };
}

export default useContainer;
