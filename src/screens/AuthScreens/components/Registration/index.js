import React from 'react';
import { Pressable, View } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import Input from 'components/Input';
import { Button } from 'components/Button';
import useContainer from './hook';
import { Formik } from 'formik';
import { ClosedEyeIcon, EyeIcon } from 'assets/Icons';
import { CustomText, RadioButton } from 'components';
import { userRoles } from 'constants/userRoles';
import dispatch from 'helper/dispatch/dispatch';
import { SIGN_UP_REQUEST } from 'store/actions/types';
import validationSchema from 'utils/validations/signup';

const RegistrationScreen = () => {
  const {
    state,
    theme,
    styles,
    passwordShow,
    confirmPassShow,
    setConfirmPassShow,
    setPasswordShow,
    setRole,
    role,
  } = useContainer();
  console.log(1111);
  return (
    <Formik
      initialValues={{ ...state }}
      validationSchema={validationSchema}
      onSubmit={(values) => dispatch(SIGN_UP_REQUEST, { ...values, role })}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.login_container}>
          <Animatable.View
            animation="fadeInDown"
            duration={2200}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Name'}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              inputStyles={styles.input}
              validated={errors.name && touched.name}
              errorText={errors.name}
              onBlurHandler={handleBlur('name')}
              required
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={2000}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Email'}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              inputStyles={styles.input}
              validated={errors.email && touched.email}
              errorText={errors.email}
              onBlurHandler={handleBlur('email')}
              required
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={1700}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Phone number'}
              value={values.phone}
              onChangeText={handleChange('phone')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              inputStyles={styles.input}
              validated={errors.phone && touched.phone}
              errorText={errors.phone}
              onBlurHandler={handleBlur('phone')}
              required
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={1400}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              secureTextEntry={!passwordShow}
              inputStyles={styles.input}
              validated={errors.password && touched.password}
              errorText={errors.password}
              onBlurHandler={handleBlur('password')}
              required
            />
            <Pressable onPress={() => setPasswordShow(!passwordShow)} style={styles.eye_press}>
              {passwordShow ? (
                <EyeIcon width={Sizes(20)} height={Sizes(20)} color={Colors.placeholder} />
              ) : (
                <ClosedEyeIcon width={Sizes(20)} height={Sizes(20)} color={Colors.placeholder} />
              )}
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={1100}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Confirm password'}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              placeholderTextColor={theme?.PRIMARY_BACKGROUND_COLOR}
              secureTextEntry={!confirmPassShow}
              inputStyles={styles.input}
              validated={errors.confirmPassword && touched.confirmPassword}
              errorText={errors.confirmPassword}
              onBlurHandler={handleBlur('confirmPassword')}
              required
            />
            <Pressable
              onPress={() => setConfirmPassShow(!confirmPassShow)}
              style={styles.eye_press}>
              {confirmPassShow ? (
                <EyeIcon width={Sizes(20)} height={Sizes(20)} color={Colors.placeholder} />
              ) : (
                <ClosedEyeIcon width={Sizes(20)} height={Sizes(20)} color={Colors.placeholder} />
              )}
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={1300}
            useNativeDriver
            style={styles.roles_container}>
            <Pressable onPress={() => setRole(userRoles.USER)} style={styles.roles}>
              <RadioButton size={Sizes(18)} active={role === userRoles.USER} />
              <CustomText children="User" globalStyle={{ color: theme?.PRIMARY_TEXT_COLOR }} />
            </Pressable>
            <Pressable onPress={() => setRole(userRoles.ADMIN)} style={styles.roles}>
              <RadioButton size={Sizes(18)} active={role === userRoles.ADMIN} />
              <CustomText children="Admin" globalStyle={{ color: theme?.PRIMARY_TEXT_COLOR }} />
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            useNativeDriver
            duration={500}
            style={styles.button}>
            <Button title="Sign Up" size="normal" onPress={handleSubmit} />
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

export { RegistrationScreen };
