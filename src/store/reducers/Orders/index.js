import { GET_ORDER_SUCCESS, SEARCH_WITH_DESCRIPTION } from 'store/actions/types/orderTypes';
import { ordersList } from 'assets/mockData';

const initialState = {
  list: [...ordersList],
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
        if (item.description.includes(payload)) {
          acc.push(item);
        }
        return acc;
      }, []);
      return {
        searchList: newList,
        list: [...ordersList],
      };

    default: {
      return state;
    }
  }
}
