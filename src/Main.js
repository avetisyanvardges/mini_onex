import React, { Fragment } from 'react';
import StackNavigation from 'navigation/StackNavigation';
import { LogBox } from 'react-native';
import { ToastMessage } from 'components';
import { useSelector } from 'react-redux';

const Main = () => {
  const toast = useSelector(({ toast }) => toast);
  LogBox.ignoreLogs(['Require cycle:']);
  return (
    <Fragment>
      {toast.visible && <ToastMessage message={toast.message} type={toast.type} />}
      <StackNavigation />
    </Fragment>
  );
};

export default Main;
