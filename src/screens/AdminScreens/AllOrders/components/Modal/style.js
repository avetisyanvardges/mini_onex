import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';

const Styles = (theme) => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      height: Sizes(270),
      margin: Sizes(20),
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderRadius: Sizes(20),
      padding: Sizes(15),
      ...Shadow,
    },
    title: {
      fontSize: Sizes(18),
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: Sizes(10),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    button: {
      borderRadius: Sizes(20),
      padding: Sizes(10),
      elevation: Sizes(2),
      backgroundColor: Colors.green,
      marginTop: Sizes(10),
    },
    textStyle: {
      color: Colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: Sizes(15),
      textAlign: 'center',
    },
    checkbox: {
      alignSelf: 'center',
    },
    statuses: {
      flexDirection: 'row',
      marginBottom: Sizes(10),
      width: Sizes(200),
      alignItems: 'center',
    },
    statuses_text: {
      fontSize: Sizes(16),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    close_icon: {
      alignSelf: 'flex-end',
    },
  });
};

export { Styles };
