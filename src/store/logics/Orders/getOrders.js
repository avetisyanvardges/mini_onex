import { createLogic } from 'redux-logic';
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from 'store/actions/types/orderTypes';
import { SET_TOAST_MASSAGE, SET_TOAST_TYPE, SHOW_TOAST } from 'store/actions/types';
import { toastTypes } from 'constants/toast';

export const getOrders = createLogic({
  type: GET_ORDER_REQUEST,
  latest: true,
  async process({ action, HttpClient, dispatch }) {
    try {
      const { data } = await HttpClient.get('/orders.json');
      dispatch(GET_ORDER_SUCCESS, data);
    } catch ({ response: { data } }) {
      dispatch(SET_TOAST_TYPE, toastTypes.ERROR);
      dispatch(SET_TOAST_MASSAGE, 'Something Went Wrong');
      dispatch(SHOW_TOAST);
    }
  },
});
