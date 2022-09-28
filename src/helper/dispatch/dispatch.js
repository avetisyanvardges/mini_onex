import React from 'react';
import { makeActions } from './makeActions';
import store from 'store';

export default function dispatch(type, payload) {
  const dispatch = store.dispatch;
  return dispatch(makeActions(type, payload));
}
