import React from 'react';
import { View } from 'react-native';
import { Colors } from 'assets/RootStyles';
import useContainer from './hook';

const RadioButton = (props) => {
  const { styles, size, active_size } = useContainer(props);
  console.log(size);
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        styles.btn_container,
      ]}>
      {props.active && (
        <View
          style={{
            width: active_size,
            height: active_size,
            borderRadius: active_size / 2,
            backgroundColor: Colors.green,
          }}
        />
      )}
    </View>
  );
};

export { RadioButton };
