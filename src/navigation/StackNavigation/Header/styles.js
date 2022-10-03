import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';

const Styles = (theme, mode) => {
  return StyleSheet.create({
    header: {
      height: Sizes(50),
      backgroundColor: Colors.green,
      flexDirection: 'row',
      paddingHorizontal: Sizes(10),
    },
    title_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: Colors.white,
      fontSize: Sizes(18),
    },
    settings_icon: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: Sizes(7),
      zIndex: 999,
    },
    settings_sheet: {
      minWidth: Sizes(100),
      minHeight: Sizes(150),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderRadius: Sizes(12),
      position: 'absolute',
      top: Sizes(10),
      right: -Sizes(10),
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
      zIndex: 999,
      alignItems: 'center',
      paddingVertical: Sizes(5),
      paddingHorizontal: Sizes(10),
    },
    underline: {
      width: '100%',
      height: Sizes(1),
      backgroundColor: Colors.placeholder,
      borderRadius: Sizes(5),
      marginVertical: Sizes(10),
    },
    theme_switch_container: {
      width: '100%',
      height: Sizes(40),
      borderRadius: Sizes(10),
      backgroundColor: Colors.silver,
      flexDirection: 'row',
      alignItems: 'center',
      padding: Sizes(4),
    },
    mode_container: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: Sizes(10),
    },
    light_mode_active: {
      backgroundColor: mode === LIGHT_THEME ? Colors.white : null,
    },
    dark_mode_active: {
      backgroundColor: mode === DARK_THEME ? Colors.white : null,
    },
  });
};

export { Styles };
