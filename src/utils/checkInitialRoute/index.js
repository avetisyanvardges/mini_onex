import React from 'react';
import { UserService } from 'services/UserService';
import { userRoles } from 'constants/userRoles';
import { routNames } from 'constants/routNames';

function checkInitialRoute() {
  const { currentUser } = UserService;
  const admin = currentUser?.role === userRoles.ADMIN;
  if (currentUser) {
    if (admin) {
      return routNames.ADMIN_SCREENS;
    } else {
      return routNames.USER_SCREENS;
    }
  } else {
    return routNames.AUTH;
  }
}

export { checkInitialRoute };
