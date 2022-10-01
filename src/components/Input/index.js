import React, { useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Styles } from './styles';
import { Colors } from 'assets/RootStyles';

function Input(props) {
  const inputRef = useRef(null);
  const styles = Styles();
  const {
    maxLength,
    required,
    keyboardType,
    multiline,
    placeholder,
    onChangeText,
    value,
    returnKeyType,
    secureTextEntry,
    inputStyles,
    inputFocusHandle,
    onBlurHandler,
    errorText,
    validated,
  } = props;
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          maxLength={maxLength}
          placeholder={placeholder + `${required ? ' * ' : ''}`}
          ref={inputRef}
          keyboardType={keyboardType}
          multiline={multiline}
          onChangeText={onChangeText}
          value={value}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          style={[styles.input, inputStyles]}
          onFocus={inputFocusHandle}
          onBlur={onBlurHandler}
          placeholderTextColor={Colors.placeholder}
        />
      </View>
      {validated ? (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.errorTextStyle}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
}

export default Input;
