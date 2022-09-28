import { createLogic } from 'redux-logic';
import { navigate } from 'services/NavigationService';
import { SIGN_IN_REQUEST } from 'store/actions/types';

export const signInLogic = createLogic({
  type: SIGN_IN_REQUEST,
  latest: true,
  async process({ action, HttpClient }, dispatch, done) {
    try {
      // const {data} = await HttpClient.post('auth/sign-in', action.payload);
      // dispatch(makeActions(SIGN_IN_SUCCESS, data));
      await navigate('TabNavigation');
    } catch (err) {
      console.error('ERROR createEvent', err);
    }
    done();
  },
});
