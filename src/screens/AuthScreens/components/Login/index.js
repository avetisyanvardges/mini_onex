import React from 'react';
import { Pressable, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Colors, Sizes } from 'assets/RootStyles';
import Input from 'components/Input';
import { ClosedEyeIcon, EyeIcon } from 'assets/Icons';
import { CustomText } from 'components';
import { Button } from 'components/Button';
import useContainer from './hook';
import { Formik } from 'formik';
import dispatch from 'helper/dispatch/dispatch';
import { SIGN_IN_REQUEST } from 'store/actions/types';

const LoginScreen = () => {
  const { styles, passwordShow, setPasswordShow, state, theme } = useContainer();
  return (
    <Formik initialValues={{ ...state }} onSubmit={(values) => dispatch(SIGN_IN_REQUEST, values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.login_container}>
          <Animatable.View
            animation="fadeInDown"
            duration={1600}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Email'}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              inputStyles={styles.input}
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            useNativeDriver
            duration={1200}
            style={styles.inputContainer}>
            <Input
              placeholder={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholderTextColor={theme?.PRIMARY_TEXT_COLOR}
              secureTextEntry={!passwordShow}
              inputStyles={styles.input}
            />
            <Pressable onPress={() => setPasswordShow(!passwordShow)} style={styles.eye_press}>
              {passwordShow ? (
                <EyeIcon width={Sizes(24)} height={Sizes(24)} color={Colors.placeholder} />
              ) : (
                <ClosedEyeIcon width={Sizes(24)} height={Sizes(24)} color={Colors.placeholder} />
              )}
            </Pressable>
          </Animatable.View>
          <Animatable.View animation="fadeInDown" useNativeDriver duration={800}>
            <Pressable style={styles.forgot_press}>
              <CustomText children="Forgot password" globalStyle={styles.forgot} />
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            useNativeDriver
            duration={400}
            style={styles.button}>
            <Button title="Login" size="normal" onPress={handleSubmit} />
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

export { LoginScreen };
