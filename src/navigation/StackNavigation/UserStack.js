import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routNames } from 'constants/routNames';
import { Orders } from 'screens';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routNames.USER_SCREENS.ORDERS} component={Orders} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
