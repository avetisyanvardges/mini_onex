import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { checkInitialRoute } from 'utils/checkInitialRoute';
import { AuthScreen } from 'screens';
import UserStack from 'navigation/StackNavigation/UserStack';
import AdminStack from 'navigation/StackNavigation/AdminStack';

const StackNavigation = () => {
  const initialRoute = checkInitialRoute();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name={routNames.AUTH} component={AuthScreen} />
        <Stack.Screen name={routNames.USER_SCREENS.INITIAL} component={UserStack} />
        <Stack.Screen name={routNames.ADMIN_SCREENS.INITIAL} component={AdminStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
