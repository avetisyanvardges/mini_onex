import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { GET_ORDER_SUCCESS, SEARCH_WITH_DESCRIPTION } from 'store/actions/types/orderTypes';
import dispatch from 'helper/dispatch/dispatch';
import { isEmpty } from 'lodash';
import { ordersList } from 'assets/mockData';
import { Styles } from 'screens/UserScreens/Orders/styles';
import { useWindowDimensions } from 'react-native';
import { searchTypes } from 'constants/search';
import { Colors, Sizes } from 'assets/RootStyles';
import { SearchIcon, Tracking } from 'assets/Icons';
import { Country } from 'assets/Icons/Country';

function useContainer(props) {
  const { theme, mode } = useSelector(({ themes }) => themes);
  const [searchType, setSearchType] = useState(searchTypes.DESCRIPTION);
  const { width, height } = useWindowDimensions();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const { searchValue, setSearchValue, filterSheetVisible, setFilterSheetVisible } = props;

  const searchIcons = {
    [searchTypes.DESCRIPTION]: (
      <SearchIcon width={Sizes(20)} height={Sizes(20)} color={Colors.green} />
    ),
    [searchTypes.COUNTRY]: <Country width={Sizes(20)} height={Sizes(20)} color={Colors.green} />,
    [searchTypes.TRACK_CODE]: (
      <Tracking width={Sizes(20)} height={Sizes(20)} color={Colors.green} />
    ),
  };

  const searchPlaceholder = {
    [searchTypes.DESCRIPTION]: 'Search via description',
    [searchTypes.COUNTRY]: 'Search via country',
    [searchTypes.TRACK_CODE]: 'Search via track code',
  };

  const setActiveType = (type) => {
    if (searchType === type) {
      setSearchType(searchTypes.DESCRIPTION);
    } else {
      setSearchType(type);
    }
    setFilterSheetVisible(false);
  };

  const handleChange = (text) => {
    if (!isEmpty(text)) {
      const body = {
        searchType,
        searchText: text,
      };
      dispatch(SEARCH_WITH_DESCRIPTION, body);
    } else {
      dispatch(GET_ORDER_SUCCESS, ordersList);
    }
    setSearchValue(text);
  };

  const styles = Styles(theme, '', '', filterSheetVisible);

  return {
    width,
    height,
    styles,
    theme,
    searchValue,
    handleChange,
    filterSheetVisible,
    setFilterSheetVisible,
    searchType,
    setSearchType,
    setActiveType,
    searchIcons,
    searchPlaceholder,
    settingsVisible,
    setSettingsVisible,
    mode,
  };
}

export default useContainer;
