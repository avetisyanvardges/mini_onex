import { StyleSheet } from 'react-native';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      height: '100%',
      position: 'absolute',
      zIndex: 999,
      width: '100%',
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
  });
};
export { Styles };
