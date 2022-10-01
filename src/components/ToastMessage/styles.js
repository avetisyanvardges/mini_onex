import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import useContainer from 'components/ToastMessage/hook';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      minHeight: Sizes(40),
      margin: Sizes(10),
      marginBottom: Sizes(5),
      backgroundColor: Colors.white,
      borderRadius: Sizes(12),
      position: 'absolute',
      top: Sizes(50),
      left: 0,
      right: 0,
      zIndex: 999,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
    },
    typeColor: {
      width: Sizes(50),
      height: '100%',
      borderTopWidth: 0.1,
      borderBottomWidth: 0.1,
      borderLeftWidth: 3,
      borderRadius: Sizes(10),
    },
    message_container: {
      flex: 1,
      marginHorizontal: Sizes(15),
      paddingLeft: 0,
    },
    message: {
      color: Colors.white,
      fontWeight: '600',
      fontSize: Sizes(15),
    },
  });
};
export { Styles };
