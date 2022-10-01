import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import { isEmpty } from 'lodash';

const Styles = (theme, buttonColor, list, filterSheetVisible) => {
  return StyleSheet.create({
    list_container: {
      flex: isEmpty(list) ? 1 : null,
      paddingBottom: Sizes(20),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
    },
    header: {
      height: Sizes(50),
      backgroundColor: Colors.green,
      flexDirection: 'row',
      paddingHorizontal: Sizes(10),
    },
    sep_component: {
      height: Sizes(15),
    },
    search_container: {
      flex: 1,
      height: Sizes(40),
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      alignItems: 'center',
      paddingHorizontal: Sizes(10),
      marginRight: Sizes(10),
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
    },
    search_input: {
      fontSize: Sizes(15),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    filter_container: {
      margin: Sizes(10),
      flexDirection: 'row',
      zIndex: filterSheetVisible ? 998 : -1,
    },
    filter_press: {
      width: Sizes(40),
      height: Sizes(40),
      borderRadius: 10,
      backgroundColor: filterSheetVisible
        ? theme?.PRIMARY_TEXT_COLOR
        : theme?.PRIMARY_BACKGROUND_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
      zIndex: filterSheetVisible ? 999 : -1,
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
      width: Sizes(100),
      height: Sizes(150),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderRadius: Sizes(12),
      position: 'absolute',
      top: Sizes(10),
      right: -Sizes(10),
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
      zIndex: 999,
      alignItems: 'center',
      paddingTop: Sizes(5),
      paddingHorizontal: Sizes(10),
    },
    underline: {
      width: '100%',
      height: Sizes(1),
      backgroundColor: Colors.placeholder,
      borderRadius: Sizes(5),
      marginVertical: Sizes(10),
    },
    sheet_container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
    },
    filter_switch_container: {
      width: Sizes(150),
      height: Sizes(50),
      borderRadius: Sizes(10),
      padding: Sizes(5),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
    },
    tracking_container: {
      flex: 1,
      height: Sizes(40),
      borderRadius: Sizes(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.green,
    },
    country: {
      flex: 1,
      alignItems: 'center',
    },
    indicator: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export { Styles };
