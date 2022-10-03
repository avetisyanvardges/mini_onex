import { createLogic } from 'redux-logic';
import { SIGN_IN_REQUEST } from 'store/actions/types';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

export const signInLogic = createLogic({
  type: SIGN_IN_REQUEST,
  latest: true,
  async process({ action: { payload }, HttpClient, dispatch }) {
    try {
      // let {
      //   user: { currentUser },
      // } = store.getState();
      // console.log(currentUser);
      // await dispatch(SIGN_IN_SUCCESS, payload);
      // if (currentUser.role === userRoles.ADMIN) {
      //   await navigate(routNames.ADMIN_SCREENS);
      // } else if (currentUser.role === userRoles.USER) {
      //   await navigate(routNames.USER_SCREENS);
      // }
      await navigate(routNames.ADMIN_SCREENS.INITIAL);
    } catch (err) {
      console.error('ERROR signInLogic', err);
    }
  },
});
