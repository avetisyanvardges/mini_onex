import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routNames } from 'constants/routNames';
import { Colors } from 'assets/RootStyles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Orders } from 'screens';
import Header from 'navigation/StackNavigation/Header';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.green }} edges={['top']}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <Header {...props} />,
          }}>
          <Stack.Screen name={routNames.USER_SCREENS.ORDERS} component={Orders} />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default StackNavigation;
