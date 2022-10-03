import { StyleSheet } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import { deviceInfo } from 'assets/DeviceInfo';

const Styles = (theme, activeTab) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
    },
    login_container: {
      marginTop: Sizes(25),
      paddingHorizontal: Sizes(10),
    },
    eye_press: {
      marginHorizontal: Sizes(10),
    },
    roles: {
      flexDirection: 'row',
    },
    roles_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: Sizes(15),
    },
    button: {
      marginVertical: Sizes(50),
      alignItems: 'center',
    },
    forgot: {
      fontSize: Sizes(14),
      color: Colors.green,
      textAlign: 'right',
    },
    forgot_press: {
      marginTop: Sizes(10),
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
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      shadowColor: theme?.PRIMARY_TEXT_COLOR,
      ...Shadow,
    },
    tabContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
      borderRadius: Sizes(12),
    },
    tab: {
      flex: 1,
      height: Sizes(30),
      borderRadius: Sizes(12),
      alignItems: 'center',
      justifyContent: 'center',
    },
    active_tab_login: {
      backgroundColor: activeTab === 'login' ? Colors.green : theme?.PRIMARY_BACKGROUND_COLOR,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    active_tab_signUp: {
      backgroundColor: activeTab === 'signUp' ? Colors.green : theme?.PRIMARY_BACKGROUND_COLOR,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    active_text_login: {
      color: activeTab === 'login' ? theme?.PRIMARY_BACKGROUND_COLOR : theme?.PRIMARY_TEXT_COLOR,
    },
    active_text_signUp: {
      color: activeTab === 'signUp' ? theme?.PRIMARY_BACKGROUND_COLOR : theme?.PRIMARY_TEXT_COLOR,
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
