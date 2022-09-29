import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { CustomText } from 'components';
import { useSelector } from 'react-redux';

const Button = ({
  size,
  onPress,
  disabled,
  title,
  buttonWidth,
  buttonPadding,
  textColor,
  containerStyle,
}) => {
  const { theme, buttonColor } = useSelector(({ themes }) => themes);

  const styles = Styles(theme, buttonColor);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        size ? styles[size] : [buttonWidth, buttonPadding],
        containerStyle,
      ]}>
      <CustomText children={title} globalStyle={[styles.textStyle, styles[`${size}FontSize`]]} />
    </TouchableOpacity>
  );
};

export { Button };
