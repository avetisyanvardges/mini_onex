import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Colors, Sizes } from 'assets/RootStyles';
import Input from 'components/Input';
import { useSelector } from 'react-redux';
import { Styles } from './styles';
import { ClosedEyeIcon, EyeIcon } from 'assets/Icons';

const LoginScreen = () => {
  const { theme } = useSelector(({ themes }) => themes);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState();
  const styles = Styles(theme);
  return (
    <Animatable.View animation={'fadeInUp'} style={{ minHeight: Sizes(150) }}>
      <Input
        placeholder={'Էլ․հասցե'}
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
        inputStyles={styles.input}
      />
      <View style={styles.passwordContainer}>
        <Input
          placeholder={'Գաղտնաբառ'}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholderTextColor={theme?.PRIMARY_TEXT_COLOR}
          secureTextEntry={!passwordShow}
          inputStyles={styles.passwordInput}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              setPasswordShow(!passwordShow);
            }}
            style={{ marginHorizontal: Sizes(10) }}>
            {passwordShow ? (
              <EyeIcon width={Sizes(24)} height={Sizes(24)} IconColor={Colors.placeholder} />
            ) : (
              <ClosedEyeIcon width={Sizes(24)} height={Sizes(24)} IconColor={Colors.placeholder} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
};

export { LoginScreen };
