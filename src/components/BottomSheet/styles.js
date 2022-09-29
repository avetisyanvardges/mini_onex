import {StyleSheet, useWindowDimensions} from 'react-native';

const Styles = () => {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    page: {
      height: '100%',
      position: 'absolute',
      zIndex: 999,
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
  });
};
export {Styles};
