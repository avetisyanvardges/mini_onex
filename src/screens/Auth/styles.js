import { StyleSheet } from 'react-native';
import { BackgroundColors, Colors, Shadow, Sizes } from 'assets/RootStyles';
import { deviceInfo } from 'assets/DeviceInfo';

const Styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      height: Sizes(70),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: Sizes(70),
      header: Sizes(70),
      resizeMode: 'contain',
    },
    title: {
      fontSize: Sizes(25),
      marginLeft: Sizes(10),
      color: Colors.green,
    },
    content: {
      marginHorizontal: Sizes(15),
      marginTop: Sizes(15),
      borderRadius: Sizes(12),
      backgroundColor: BackgroundColors.white,
      ...Shadow,
    },
    tabContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: BackgroundColors.white,
      borderRadius: Sizes(12),
    },
    tab: {
      flex: 1,
      height: Sizes(30),
      borderRadius: Sizes(12),
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabText: {
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    input: {
      fontSize: Sizes(16),
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: deviceInfo.ios ? Sizes(10) : 0,
      marginVertical: Sizes(3),
      borderBottomWidth: 0.5,
      borderColor: Colors.placeholder,
    },
  });
};

export { Styles };
