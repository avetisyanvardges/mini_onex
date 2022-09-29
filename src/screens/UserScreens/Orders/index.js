import React from 'react';
import { Pressable, View } from 'react-native';
import useContainer from './hook';
import { CustomText } from 'components';
import { BackgroundColors, Colors, Shadow, Sizes } from 'assets/RootStyles';
import { FilterIcon, SearchIcon, SettingsIcon, Tracking } from 'assets/Icons';
import BtSheet from 'components/BottomSheet';
import { Country } from 'assets/Icons/Country';

const Orders = () => {
  const { styles, theme, filterSheetVisible, setFilterSheetVisible } = useContainer();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <CustomText
            children="Պատվերներ"
            globalStyle={{ color: Colors.white, fontSize: Sizes(18) }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: Sizes(7),
          }}>
          <SettingsIcon color={Colors.white} />
        </View>
      </View>
      <View style={{ margin: Sizes(10) }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.search_container}>
            <SearchIcon width={Sizes(20)} height={Sizes(20)} color={Colors.green} />
          </View>
          <Pressable onPress={() => setFilterSheetVisible(true)} style={styles.filter_container}>
            <FilterIcon width={Sizes(20)} height={Sizes(20)} color={Colors.green} />
          </Pressable>
        </View>
      </View>
      {filterSheetVisible && (
        <BtSheet open={filterSheetVisible} setOpen={setFilterSheetVisible}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View
              style={{
                width: Sizes(150),
                height: Sizes(50),
                borderRadius: Sizes(10),
                padding: Sizes(5),
                backgroundColor: BackgroundColors.white,
                flexDirection: 'row',
                alignItems: 'center',
                ...Shadow,
              }}>
              <View
                style={{
                  flex: 1,
                  height: Sizes(40),
                  borderRadius: Sizes(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.green,
                }}>
                <Tracking color={Colors.white} />
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Country />
              </View>
            </View>
          </View>
        </BtSheet>
      )}
    </View>
  );
};

export { Orders };
