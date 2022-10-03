import { CREATE_USER_REQUEST, SIGN_IN_SUCCESS } from 'store/actions/types';

const initialState = {
  token: '',
  refreshToken: '',
  currentUser: {},
  users: {},
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      let userResponse;
      if (state.users[payload.email]) {
        userResponse = state.users[payload.email];
      }
      return {
        ...state,
        currentUser: userResponse,
      };
    case CREATE_USER_REQUEST:
      let newObj = state.users;
      if (!newObj[payload.email]) {
        newObj = {
          ...newObj,
          [payload.email]: payload,
        };
      }
      return {
        ...state,
        users: newObj,
      };

    default: {
      return state;
    }
  }
}
