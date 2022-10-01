import React, { useEffect, useRef } from 'react';
import { Styles } from 'components/ToastMessage/styles';
import { Animated } from 'react-native';
import { Colors } from 'assets/RootStyles';
import dispatch from 'helper/dispatch/dispatch';
import { HIDE_TOAST } from 'store/actions/types';
import { toastTypes } from 'constants/toast';

function useContainer(props) {
  const styles = Styles();
  const opacity = useRef(new Animated.Value(1)).current;
  const { message, type } = props;
  const colors = {
    [toastTypes.ERROR]: Colors.red,
    [toastTypes.SUCCESS]: Colors.green,
    [toastTypes.WARNING]: Colors.yellow,
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      dispatch(HIDE_TOAST);
    });
  }, []);

  return {
    styles,
    colors,
    message,
    type,
    opacity,
  };
}

export default useContainer;
