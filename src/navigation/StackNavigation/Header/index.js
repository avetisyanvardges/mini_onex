import React, { Fragment } from 'react';
import { Pressable, View } from 'react-native';
import { CustomText } from 'components';
import { MoonIcon, SettingsIcon, SunIcon } from 'assets/Icons';
import { Colors, Sizes } from 'assets/RootStyles';
import useContainer from './hook';
import dispatch from 'helper/dispatch/dispatch';
import { DARK_THEME, LIGHT_THEME } from 'store/actions/types';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const HeaderComponent = ({ route }) => {
  const { styles, theme, settingsVisible, setSettingsVisible } = useContainer();
  return (
    <Fragment>
      <View style={styles.header}>
        <View style={styles.title_container}>
          <CustomText children={route.name} globalStyle={styles.title} />
        </View>
        <Pressable
          onPress={() => setSettingsVisible(!settingsVisible)}
          style={styles.settings_icon}>
          <SettingsIcon color={Colors.white} />
          {settingsVisible && (
            <View style={styles.settings_sheet}>
              <SettingsIcon color={theme?.PRIMARY_TEXT_COLOR} />
              {route.name === 'AllOrders' && (
                <Fragment>
                  <View style={styles.underline} />
                  <CustomText
                    onPress={() => navigate(routNames.AUTH)}
                    children="Add admin"
                    globalStyle={{ fontSize: Sizes(16), color: theme?.PRIMARY_TEXT_COLOR }}
                  />
                </Fragment>
              )}
              <View style={styles.underline} />
              <CustomText
                onPress={() => navigate(routNames.AUTH)}
                children="Log out"
                globalStyle={{ fontSize: Sizes(16), color: theme?.PRIMARY_TEXT_COLOR }}
              />
              <View style={styles.underline} />
              <View style={styles.theme_switch_container}>
                <Pressable
                  onPress={() => dispatch(LIGHT_THEME)}
                  style={[styles.mode_container, styles.light_mode_active]}>
                  <SunIcon color={Colors.yellow} />
                </Pressable>
                <Pressable
                  onPress={() => dispatch(DARK_THEME)}
                  style={[styles.mode_container, styles.dark_mode_active]}>
                  <MoonIcon color={'blue'} />
                </Pressable>
              </View>
            </View>
          )}
        </Pressable>
      </View>
    </Fragment>
  );
};

export default HeaderComponent;
