import React, { Fragment } from 'react';
import StackNavigation from 'navigation/StackNavigation';
import { ToastMessage } from 'components';
import { useSelector } from 'react-redux';
import { useCheckTheme } from 'utils';

const Main = () => {
  const toast = useSelector(({ toast }) => toast);
  useCheckTheme();

  return (
    <Fragment>
      {toast.visible && <ToastMessage message={toast.message} type={toast.type} />}
      <StackNavigation />
    </Fragment>
  );
};

export default Main;
