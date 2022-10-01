import axios from 'axios';
import {
  HIDE_LOADER,
  HIDE_TOAST,
  SET_TOAST_MASSAGE,
  SHOW_LOADER,
  SIGN_OUT_REQUEST,
} from 'store/actions/types';
import { baseUrlApi } from 'constants/url';
import dispatch from 'helper/dispatch/dispatch';

const HttpClient = axios.create({
  baseURL: baseUrlApi,
});

HttpClient.interceptors.request.use(async (config) => {
  dispatch(SHOW_LOADER);
  //----------------------------- FAKE DATA API KEY ----------------------------
  config.params = {
    ...config.params,
    key: '80492510',
  };
  return config;
});

HttpClient.interceptors.response.use(
  (response) => {
    dispatch(HIDE_LOADER);
    return response;
  },
  async (error) => {
    dispatch(HIDE_LOADER);
    if (error.response && error.response.status === 401) {
      dispatch(SIGN_OUT_REQUEST, {});
    }
    if (error.response && error.response.data && error.response.status !== 401) {
      dispatch(SET_TOAST_MASSAGE, {
        visible: true,
        type: 'error',
        text: error.response.data.message || 'alerts.something_went_wrong',
      });
      dispatch({ type: HIDE_TOAST, payload: {} });
    }
    return Promise.reject(error);
  },
);
export default HttpClient;
