import { StyleSheet } from 'react-native';
import { Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: Sizes(25),
      height: Sizes(25),
    },
    track_container: {
      width: Sizes(45),
      height: Sizes(2),
      marginHorizontal: Sizes(5),
    },
  });
};

export { Styles };
