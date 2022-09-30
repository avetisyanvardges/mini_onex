import { HIDE_TOAST, SET_TOAST_MASSAGE, SET_TOAST_TYPE, SHOW_TOAST } from 'store/actions/types';

const initialState = {
  visible: false,
  message: '',
  type: '',
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_TOAST_MASSAGE: {
      let newMessage;
      if (typeof payload === 'string') {
        newMessage = payload;
      } else {
        const arr = Object.keys(payload);
        newMessage = payload[arr[0]]?.message;
      }
      return {
        ...state,
        message: newMessage,
      };
    }
    case SET_TOAST_TYPE: {
      return {
        ...state,
        type: payload,
      };
    }
    case SHOW_TOAST: {
      return {
        ...state,
        visible: true,
      };
    }
    case HIDE_TOAST: {
      return {
        ...state,
        visible: false,
      };
    }

    default: {
      return state;
    }
  }
}
