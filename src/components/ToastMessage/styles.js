import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    container: {
      minHeight: Sizes(40),
      margin: Sizes(10),
      marginBottom: Sizes(5),
      backgroundColor: Colors.white,
      borderRadius: Sizes(12),
      position: 'absolute',
      top: Sizes(50),
      left: 0,
      right: 0,
      zIndex: 999,
      flexDirection: 'row',
      alignItems: 'center',
      ...Shadow,
    },
    typeColor: {
      width: Sizes(50),
      height: '100%',
      borderTopWidth: 0.1,
      borderBottomWidth: 0.1,
      borderLeftWidth: 3,
      borderRadius: Sizes(10),
    },
  });
};
export { Styles };
