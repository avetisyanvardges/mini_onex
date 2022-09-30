import { Styles } from './styles';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';
import { deviceInfo } from 'assets/DeviceInfo';
import { GET_ORDER_REQUEST } from 'store/actions/types/orderTypes';
import dispatch from 'helper/dispatch/dispatch';
import OrderItem from 'screens/UserScreens/Orders/components/OrderItem';

function useContainer() {
  const { theme } = useSelector(({ themes }) => themes);
  const { list, searchList } = useSelector(({ orders }) => orders);
  const loaderVisible = useSelector(({ loader: { visible } }) => visible);
  const [filterSheetVisible, setFilterSheetVisible] = useState(false);

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST);
    if (deviceInfo.android) {
      StatusBar.setBackgroundColor(Colors.green);
    }
  }, []);

  const renderOrderList = ({ item, index }) => {
    return <OrderItem data={item} index={index} />;
  };

  const renderItemSeparatorComponent = () => <View style={{ height: Sizes(15) }} />;

  const renderEmptyOrderComponent = () => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {loaderVisible ? (
        <ActivityIndicator size={Sizes(100)} color={Colors.green} />
      ) : (
        <Text>Hello</Text>
      )}
    </View>
  );

  const styles = Styles(theme);

  return {
    styles,
    theme,
    filterSheetVisible,
    setFilterSheetVisible,
    list,
    searchList,
    renderOrderList,
    renderEmptyOrderComponent,
    renderItemSeparatorComponent,
  };
}

export default useContainer;
