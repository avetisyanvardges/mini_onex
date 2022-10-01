import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      height: Sizes(150),
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
  });
};

export { Styles };
