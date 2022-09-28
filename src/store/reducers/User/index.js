import { SIGN_IN_SUCCESS } from 'store/actions/types';

const initialState = {
  token: '',
  refreshToken: '',
  info: {},
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      const { token, userResponse, refreshToken } = payload;
      return {
        token,
        refreshToken,
        info: userResponse,
      };

    default: {
      return state;
    }
  }
}
