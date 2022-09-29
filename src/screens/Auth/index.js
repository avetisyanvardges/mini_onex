import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { Colors } from 'assets/RootStyles';
import { images } from 'assets/Images';
import * as Animatable from 'react-native-animatable';
import useContainer from 'screens/Auth/hook';

const AuthScreen = () => {
  const { styles, activeTab, setActiveTab, content } = useContainer();
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="zoomIn" style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>Onex</Text>
      </Animatable.View>
      <Animatable.View animation="fadeIn" style={styles.content}>
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => setActiveTab('login')}
            style={[
              styles.tab,
              {
                backgroundColor: activeTab === 'login' ? Colors.green : Colors.white,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}>
            <Text style={styles.tabText}>Login</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab('signUp')}
            style={[
              styles.tab,
              {
                backgroundColor: activeTab === 'signUp' ? Colors.green : Colors.white,
                borderTopLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            ]}>
            <Text style={styles.tabText}>Sign up</Text>
          </Pressable>
        </View>
        {content[activeTab]}
      </Animatable.View>
    </SafeAreaView>
  );
};

export { AuthScreen };
