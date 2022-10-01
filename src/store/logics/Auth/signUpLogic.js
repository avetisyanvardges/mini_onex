import { createLogic } from 'redux-logic';
import { CREATE_USER_REQUEST, SIGN_UP_REQUEST } from '../../actions/types';

export const signUpLogic = createLogic({
  type: SIGN_UP_REQUEST,
  latest: true,
  async process({ action: { payload }, HttpClient, dispatch }) {
    try {
      dispatch(CREATE_USER_REQUEST, payload);
    } catch (err) {
      console.error('ERROR signUpLogic', err);
    }
  },
});
