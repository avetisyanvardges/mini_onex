import { StyleSheet } from 'react-native';
import { BackgroundColors, Colors, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    placeholderTextStyle: {
      color: Colors.placeholder,
    },
    inputStyles: {
      fontSize: Sizes(14),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    errorTextStyle: {
      color: Colors.red,
    },
  });
};

export { Styles };
