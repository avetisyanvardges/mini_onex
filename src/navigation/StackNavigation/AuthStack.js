import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routNames } from 'constants/routNames';
import { LoginScreen, RegistrationScreen } from 'screens';

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routNames.Registration} component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
