import { Styles } from './styles';
import { useSelector } from 'react-redux';
import { useMemo, useRef } from 'react';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const snapPoints = useMemo(() => ['40%', '40%'], []);
  const sheetRef = useRef(null);
  const styles = Styles(theme);

  return { styles, theme, snapPoints, sheetRef };
}

export default useContainer;
