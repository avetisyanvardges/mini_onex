import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routNames } from 'constants/routNames';
import AllOrders from 'screens/AdminScreens/AllOrders';
import { Colors } from 'assets/RootStyles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
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
          <Stack.Screen name={routNames.ADMIN_SCREENS.ALL_ORDERS} component={AllOrders} />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default StackNavigation;
