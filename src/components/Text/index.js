import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, globalStyle, ellipsizeMode, numberOfLines, onPress }) => {
  return (
    <Text
      onPress={onPress}
      style={[globalStyle]}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export { CustomText };
