import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    btn_container: {
      borderWidth: 2,
      borderColor: Colors.green,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: Sizes(5),
    },
  });
};
export { Styles };
