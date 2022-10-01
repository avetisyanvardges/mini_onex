import { Styles } from './styles';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';
import { deviceInfo } from 'assets/DeviceInfo';
import { GET_ORDER_REQUEST } from 'store/actions/types/orderTypes';
import dispatch from 'helper/dispatch/dispatch';
import OrderItem from 'screens/UserScreens/Orders/components/OrderItem';
import HeaderComponent from 'screens/UserScreens/Orders/components/Header';

function useContainer(navigation) {
  const { theme, buttonColor } = useSelector(({ themes }) => themes);
  const { list, searchList } = useSelector(({ orders }) => orders);
  const loaderVisible = useSelector(({ loader: { visible } }) => visible);
  const [filterSheetVisible, setFilterSheetVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    dispatch(GET_ORDER_REQUEST);
    if (deviceInfo.android) {
      StatusBar.setBackgroundColor(Colors.green);
    }
  }, [navigation]);

  const renderOrderList = ({ item, index }) => {
    return <OrderItem data={item} index={index} />;
  };

  const renderItemSeparatorComponent = () => <View style={styles.sep_component} />;

  function renderListHeaderComponent() {
    return (
      <HeaderComponent
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterSheetVisible={filterSheetVisible}
        setFilterSheetVisible={setFilterSheetVisible}
      />
    );
  }

  const renderEmptyOrderComponent = () => (
    <View style={styles.indicator}>
      {loaderVisible ? (
        <ActivityIndicator size={Sizes(50)} color={Colors.green} />
      ) : (
        <Text>Hello</Text>
      )}
    </View>
  );

  const styles = Styles(theme, buttonColor, list);

  return {
    styles,
    theme,
    filterSheetVisible,
    setFilterSheetVisible,
    list,
    searchList,
    renderListHeaderComponent,
    renderOrderList,
    renderEmptyOrderComponent,
    renderItemSeparatorComponent,
    searchValue,
  };
}

export default useContainer;
