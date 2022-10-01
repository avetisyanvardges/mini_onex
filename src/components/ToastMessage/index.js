import React from 'react';
import { Animated, Text, View } from 'react-native';
import useContainer from 'components/ToastMessage/hook';

const ToastMessage = (props) => {
  const { styles, opacity, colors, type, message } = useContainer(props);
  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
          backgroundColor: colors[type],
        },
      ]}>
      <View style={styles.message_container}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
};

export { ToastMessage };
