import { createLogic } from 'redux-logic';
import { SIGN_UP_REQUEST } from '../../actions/types';

export const signUpLogic = createLogic({
  type: SIGN_UP_REQUEST,
  latest: true,
  async process({ action: { payload }, HttpClient }, dispatch, done) {
    try {
      const res = await HttpClient.post('auth/sign-up', payload);

      console.log(res, 'response:signUpLogic');
      // await AsyncStorage.setItem('token', token);
      // dispatch(makeActions(SIGN_IN_SUCCESS, user));
    } catch (err) {
      console.error('ERROR signUpLogic', err);
    }
    done();
  },
});
