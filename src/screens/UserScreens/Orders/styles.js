import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    header: {
      height: Sizes(50),
      backgroundColor: Colors.green,
      flexDirection: 'row',
      paddingHorizontal: Sizes(10),
    },
    search_container: {
      flex: 1,
      height: Sizes(40),
      borderRadius: 10,
      backgroundColor: Colors.white,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: Sizes(10),
      marginRight: Sizes(10),
      ...Shadow,
    },
    filter_container: {
      width: Sizes(40),
      height: Sizes(40),
      borderRadius: 10,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      ...Shadow,
    },
  });
};

export { Styles };
