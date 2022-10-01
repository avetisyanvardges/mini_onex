import React from 'react';
import { FlatList } from 'react-native';
import useContainer from './hook';
import { isEmpty } from 'lodash';

const Orders = ({ navigation }) => {
  const {
    styles,
    list,
    searchList,
    searchValue,
    renderOrderList,
    renderEmptyOrderComponent,
    renderItemSeparatorComponent,
    renderListHeaderComponent,
  } = useContainer(navigation);
  return (
    <FlatList
      data={!isEmpty(searchList) || !isEmpty(searchValue) ? searchList : list}
      renderItem={renderOrderList}
      ItemSeparatorComponent={renderItemSeparatorComponent}
      ListEmptyComponent={renderEmptyOrderComponent}
      ListHeaderComponent={renderListHeaderComponent()}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list_container}
    />
  );
};

export { Orders };
