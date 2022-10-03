import React, { Fragment } from 'react';
import { Pressable, View } from 'react-native';
import { CustomText } from 'components';
import { FilterIcon, MoonIcon, SettingsIcon, SunIcon, Tracking } from 'assets/Icons';
import { Colors, Sizes } from 'assets/RootStyles';
import Input from 'components/Input';
import useContainer from './hook';
import { Country } from 'assets/Icons/Country';
import { searchTypes } from 'constants/search';
import dispatch from 'helper/dispatch/dispatch';
import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const HeaderComponent = (props) => {
  const {
    width,
    height,
    styles,
    theme,
    mode,
    searchValue,
    handleChange,
    filterSheetVisible,
    setFilterSheetVisible,
    searchType,
    searchIcons,
    setActiveType,
    searchPlaceholder,
    settingsVisible,
    setSettingsVisible,
  } = useContainer(props);
  return (
    <Fragment>
      <View style={styles.filter_container}>
        <View style={styles.search_container}>
          {searchIcons[searchType]}
          <Input
            value={searchValue}
            onChangeText={handleChange}
            placeholder={searchPlaceholder[searchType]}
            inputStyles={styles.search_input}
          />
        </View>
        <Pressable
          onPress={() => setFilterSheetVisible(!filterSheetVisible)}
          style={styles.filter_press}>
          <FilterIcon width={Sizes(20)} height={Sizes(20)} color={Colors.green} />

          <View
            style={{
              ...styles.filter_press,
              backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
              height: Sizes(100),
              position: 'absolute',
              top: Sizes(45),
              opacity: filterSheetVisible ? 1 : 0,
              zIndex: 0,
            }}>
            <Pressable onPress={() => setActiveType(searchTypes.TRACK_CODE)}>
              <Tracking
                color={
                  searchType === searchTypes.TRACK_CODE ? Colors.green : theme?.PRIMARY_TEXT_COLOR
                }
              />
            </Pressable>
            <View
              style={{
                width: '80%',
                height: Sizes(2),
                backgroundColor: Colors.placeholder,
                marginVertical: Sizes(15),
              }}
            />
            <Pressable onPress={() => setActiveType(searchTypes.COUNTRY)}>
              <Country
                color={
                  searchType === searchTypes.COUNTRY ? Colors.green : theme?.PRIMARY_TEXT_COLOR
                }
              />
            </Pressable>
          </View>
        </Pressable>
      </View>
      {(filterSheetVisible || settingsVisible) && (
        <Pressable
          onPress={() => {
            filterSheetVisible
              ? setFilterSheetVisible(false)
              : settingsVisible
              ? setSettingsVisible(false)
              : null;
          }}
          style={{
            width,
            height: height + Sizes(100),
            backgroundColor: 'rgba(0,0,0,.2)',
            position: 'absolute',
            zIndex: -1,
          }}
        />
      )}
    </Fragment>
  );
};

export default HeaderComponent;
