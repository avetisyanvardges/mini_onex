import { HIDE_LOADER, SHOW_LOADER } from 'store/actions/types';

const initialState = {
  visible: false,
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SHOW_LOADER:
      return {
        visible: true,
      };
    case HIDE_LOADER:
      return {
        visible: false,
      };

    default: {
      return state;
    }
  }
}
