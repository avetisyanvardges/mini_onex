import React from 'react';
import { Animated, Text, View } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';
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
      <View style={{ flex: 1, marginHorizontal: Sizes(15), paddingLeft: 0 }}>
        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: Sizes(15) }}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};

export { ToastMessage };
