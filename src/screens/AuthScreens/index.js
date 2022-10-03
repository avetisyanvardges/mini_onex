import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { images } from 'assets/Images';
import * as Animatable from 'react-native-animatable';
import useContainer from 'screens/AuthScreens/hook';
import { CustomText } from 'components';

const AuthScreen = () => {
  const { styles, activeTab, setActiveTab, content } = useContainer();
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View useNativeDriver animation="zoomIn" style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>Onex</Text>
      </Animatable.View>
      <Animatable.View useNativeDriver animation="fadeIn" style={styles.content}>
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => setActiveTab('login')}
            style={[styles.tab, styles.active_tab_login]}>
            <CustomText children="Login" globalStyle={[styles.tabText, styles.active_text_login]} />
          </Pressable>
          <Pressable
            onPress={() => setActiveTab('signUp')}
            style={[styles.tab, styles.active_tab_signUp]}>
            <CustomText
              children="Sign Up"
              globalStyle={[styles.tabText, styles.active_text_signUp]}
            />
          </Pressable>
        </View>
        {content[activeTab]}
      </Animatable.View>
    </SafeAreaView>
  );
};

export { AuthScreen };
