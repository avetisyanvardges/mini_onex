import { Styles } from './styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from 'assets/RootStyles';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const [filterSheetVisible, setFilterSheetVisible] = useState(false);
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.green);
  }, []);
  const styles = Styles(theme);

  return { styles, theme, filterSheetVisible, setFilterSheetVisible };
}

export default useContainer;
