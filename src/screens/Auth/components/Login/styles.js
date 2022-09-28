import { StyleSheet } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    input: {
      fontSize: Sizes(18),
      paddingHorizontal: Sizes(10),
      marginVertical: Sizes(22),
      borderRadius: Sizes(12),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderBottomWidth: 0.5,
      borderColor: Colors.placeholder,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Sizes(10),
      marginVertical: Sizes(3),
      borderRadius: Sizes(12),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderBottomWidth: 0.5,
      borderColor: Colors.placeholder,
    },
    passwordInput: {
      fontSize: Sizes(18),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    line: {
      height: Sizes(1),
      backgroundColor: Colors.placeholder,
    },
    socialCircle: {
      width: Sizes(40),
      height: Sizes(40),
      borderRadius: Sizes(20),
      backgroundColor: theme?.PRIMARY_TEXT_COLOR,
      marginHorizontal: Sizes(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export { Styles };
