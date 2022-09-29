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

const LoginScreen = () => {
  const { styles, passwordShow, setPasswordShow, state, theme } = useContainer();
  return (
    <Formik initialValues={{ ...state }} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ marginTop: Sizes(25), paddingHorizontal: Sizes(10) }}>
          <Animatable.View
            animation="fadeInDown"
            duration={1600}
            useNativeDriver
            style={styles.inputContainer}>
            <Input
              placeholder={'Էլ․հասցե'}
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
              placeholder={'Գաղտնաբառ'}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholderTextColor={theme?.PRIMARY_TEXT_COLOR}
              secureTextEntry={!passwordShow}
              inputStyles={styles.input}
            />
            <Pressable
              onPress={() => setPasswordShow(!passwordShow)}
              style={{ marginHorizontal: Sizes(10) }}>
              {passwordShow ? (
                <EyeIcon width={Sizes(24)} height={Sizes(24)} color={Colors.placeholder} />
              ) : (
                <ClosedEyeIcon width={Sizes(24)} height={Sizes(24)} color={Colors.placeholder} />
              )}
            </Pressable>
          </Animatable.View>
          <Animatable.View animation="fadeInDown" useNativeDriver duration={800}>
            <Pressable style={{ marginTop: Sizes(10) }}>
              <CustomText
                children="Մոռացել ե՞ք գաղտնաբառը"
                globalStyle={{
                  fontSize: Sizes(14),
                  color: Colors.green,
                  textAlign: 'right',
                }}
              />
            </Pressable>
          </Animatable.View>
          <Animatable.View
            animation="fadeInDown"
            useNativeDriver
            duration={400}
            style={{ marginVertical: Sizes(50), alignItems: 'center' }}>
            <Button title="Login" size="normal" />
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

export { LoginScreen };
