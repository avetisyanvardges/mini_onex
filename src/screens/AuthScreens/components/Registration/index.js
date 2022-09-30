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
  return (
    <Formik
      initialValues={{ ...state }}
      validationSchema={validationSchema}
      onSubmit={(values) => dispatch(SIGN_UP_REQUEST, values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={{ marginTop: Sizes(25), paddingHorizontal: Sizes(10) }}>
          <Animatable.View
            animation="fadeInDown"
            duration={2200}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Անուն'}
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
              placeholder={'Էլ․հասցե'}
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
              placeholder={'հեռախոսահամար'}
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
              placeholder={'Գաղտնաբառ'}
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
            <Pressable
              onPress={() => setPasswordShow(!passwordShow)}
              style={{ marginHorizontal: Sizes(10) }}>
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
              placeholder={'Հաստատել գաղտնաբառը'}
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
              style={{ marginHorizontal: Sizes(10) }}>
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
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: Sizes(15),
            }}>
            <Pressable onPress={() => setRole(userRoles.USER)} style={{ flexDirection: 'row' }}>
              <RadioButton size={Sizes(18)} active={role === userRoles.USER} />
              <CustomText children="User" />
            </Pressable>
            <Pressable onPress={() => setRole(userRoles.ADMIN)} style={{ flexDirection: 'row' }}>
              <RadioButton size={Sizes(18)} active={role === userRoles.ADMIN} />
              <CustomText children="Admin" />
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            duration={500}
            style={{ marginVertical: Sizes(50), alignItems: 'center' }}>
            <Button title="Sign Up" size="normal" onPress={handleSubmit} />
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

export { RegistrationScreen };
