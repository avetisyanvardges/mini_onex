import React, { useState } from 'react';
import { Image, Pressable, Text, View, Keyboard } from 'react-native';
import { Colors } from 'assets/RootStyles';
import { Styles } from './styles';
import { images } from 'assets/Images';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { LoginScreen } from 'screens/Auth/components/Login';
import { RegistrationScreen } from 'screens/Auth/components/Registration';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthScreen = () => {
  const { theme } = useSelector(({ themes }) => themes);
  const styles = Styles(theme);
  const [activeTab, setActiveTab] = useState('login');
  const content = {
    login: <LoginScreen />,
    signUp: <RegistrationScreen />,
  };
  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomIn" style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>Onex</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.content}>
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => setActiveTab('login')}
            style={[
              styles.tab,
              { backgroundColor: activeTab === 'login' ? Colors.green : Colors.white },
            ]}>
            <Text style={styles.tabText}>Login</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab('signUp')}
            style={[
              styles.tab,
              { backgroundColor: activeTab === 'signUp' ? Colors.green : Colors.white },
            ]}>
            <Text style={styles.tabText}>Sign up</Text>
          </Pressable>
        </View>
        {content[activeTab]}
      </Animatable.View>
    </View>
  );
};

export { AuthScreen };
