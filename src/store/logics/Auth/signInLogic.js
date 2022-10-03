import { createLogic } from 'redux-logic';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from 'store/actions/types';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { store } from 'store';
import { userRoles } from 'constants/userRoles';

export const signInLogic = createLogic({
  type: SIGN_IN_REQUEST,
  latest: true,
  async process({ action: { payload }, HttpClient, dispatch }) {
    try {
      await dispatch(SIGN_IN_SUCCESS, payload.body);
      let {
        user: { currentUser },
      } = await store.getState();
      await payload.callback();
      if (currentUser.role === userRoles.ADMIN) {
        await navigate(routNames.ADMIN_SCREENS.INITIAL);
      } else if (currentUser.role === userRoles.USER) {
        await navigate(routNames.USER_SCREENS.INITIAL);
      }
    } catch (err) {
      console.error('ERROR signInLogic', err);
    }
  },
});
