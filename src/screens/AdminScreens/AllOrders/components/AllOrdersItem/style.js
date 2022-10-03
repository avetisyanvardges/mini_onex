import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: Sizes(220),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      marginHorizontal: Sizes(10),
      borderRadius: Sizes(12),
      padding: Sizes(10),
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
    },
    tracking_code: {
      color: Colors.green,
      fontWeight: 'bold',
    },
    id_container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    user_container: {
      flexDirection: 'row',
      padding: Sizes(5),
      borderWidth: Sizes(1),
      borderColor: Colors.green,
      borderRadius: Sizes(8),
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    user_image: {
      maxWidth: Sizes(24),
      maxHeight: Sizes(24),
      borderRadius: Sizes(8),
      marginRight: Sizes(6),
    },
    user_name: {
      color: Colors.green,
    },
    name_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Sizes(5),
    },
    name: {
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    currency: {
      color: Colors.green,
      fontWeight: 'bold',
    },
    description: {
      marginVertical: Sizes(5),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    content: {
      alignItems: 'center',
      marginTop: Sizes(15),
    },
    date_container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: Sizes(5),
    },
    registered_date: {
      marginRight: Sizes(50),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    received_date: {
      marginLeft: Sizes(50),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    change_button: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: Sizes(1),
      borderColor: Colors.green,
      left: Sizes(10),
      borderRadius: Sizes(8),
      padding: Sizes(5),
    },
    cancel_button: {
      flexDirection: 'row',
      backgroundColor: Colors.red,
      borderRadius: Sizes(4),
      padding: Sizes(5),
      right: Sizes(15),
    },
    cancel_button_txt: {
      color: Colors.white,
    },
    button_txt: {
      color: Colors.green,
    },
    button_container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Sizes(10),
    },
  });
};

export { Styles };
