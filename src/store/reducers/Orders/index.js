import {
  CANCEL_ORDER,
  CHANGE_ORDER_STATUS,
  GET_ORDER_SUCCESS,
  SEARCH_WITH_DESCRIPTION,
} from 'store/actions/types/orderTypes';

const initialState = {
  list: [],
  searchList: [],
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case GET_ORDER_SUCCESS:
      return {
        list: payload,
      };
    case SEARCH_WITH_DESCRIPTION:
      const newList = state.list.reduce((acc, item, index) => {
        if (item[payload.searchType].includes(payload.searchText)) {
          acc.push(item);
        }
        return acc;
      }, []);

      return {
        ...state,
        searchList: newList,
      };

    case CHANGE_ORDER_STATUS:
      const array = state.list.map((object) => {
        if (object?._id === payload?._id) {
          return {
            ...object,
            status: payload?.status,
          };
        } else {
          return object;
        }
      });
      return {
        ...state,
        list: [...array],
      };
    case CANCEL_ORDER:
      return {
        ...state,
        list: state.list.filter((list) => list._id !== payload),
      };
    default: {
      return state;
    }
  }
}
