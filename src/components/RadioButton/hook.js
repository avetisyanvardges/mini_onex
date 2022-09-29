import { useSelector } from 'react-redux';
import { Styles } from './styles';
import { Sizes } from 'assets/RootStyles';

function useContainer(props) {
  const { theme } = useSelector(({ themes }) => themes);
  const styles = Styles(theme);
  const { size } = props;
  const active_size = size - Sizes(10);
  return {
    styles,
    theme,
    active_size,
    size,
  };
}

export default useContainer;
