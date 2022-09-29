import { StyleSheet } from 'react-native';
import { Shadow, Sizes } from 'assets/RootStyles';

const Styles = (theme, buttonColor) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Sizes(20),
      backgroundColor: buttonColor?.PRIMARY_BUTTON_COLOR,
      ...Shadow,
    },
    textStyle: {
      color: theme?.PRIMARY_BACKGROUND_COLOR,
    },
    small: {
      width: Sizes(200),
      padding: Sizes(8),
    },
    normal: {
      width: Sizes(250),
      padding: Sizes(8),
    },
    big: {
      width: Sizes(320),
      padding: Sizes(12),
    },
    smallFontSize: {
      fontSize: Sizes(14),
    },
    normalFontSize: {
      fontSize: Sizes(16),
    },
    bigFontSize: {
      fontSize: Sizes(20),
    },
  });
};

export { Styles };
