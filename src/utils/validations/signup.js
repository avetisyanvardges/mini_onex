import * as yup from 'yup';
import { MAX_INPUT_LENGTH, SIGN_UP_VALIDATION } from 'constants/validations';

const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

const validationSchema = yup.object().shape({
  name: yup.string().max(MAX_INPUT_LENGTH).required(),
  email: yup.string().email('Please enter valid email').max(MAX_INPUT_LENGTH).required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
  password: yup
    .string()
    .min(
      SIGN_UP_VALIDATION.PASSWORD.MIN,
      ({ min }) => `Password must be at least ${min} characters`,
    )
    .max(SIGN_UP_VALIDATION.PASSWORD.MAX)
    .matches(passRegExp, 'One Uppercase, One Lowercase, One Number and One Special Case Character')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(
      SIGN_UP_VALIDATION.PASSWORD.MIN,
      ({ min }) => `Password must be at least ${min} characters`,
    )
    .max(SIGN_UP_VALIDATION.PASSWORD.MAX)
    .matches(passRegExp, 'One Uppercase, One Lowercase, One Number and One Special Case Character')
    .required('Password is required'),
});

export default validationSchema;
