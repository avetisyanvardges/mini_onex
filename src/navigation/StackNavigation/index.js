import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { checkInitialRoute } from 'utils/checkInitialRoute';
import { AuthScreen } from 'screens';

const StackNavigation = () => {
  const initialRoute = checkInitialRoute();
  const Stack = createStackNavigator();
  console.log(initialRoute);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name={routNames.AUTH} component={AuthScreen} />
        {/*<Stack.Screen name={routNames.AdminScreens} component={AuthStack} />*/}
        {/*<Stack.Screen name={routNames.UserScreens} component={AuthStack} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
