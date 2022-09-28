import React from 'react';
import { UserService } from 'services/UserService';
import { userRoles } from 'constants/userRoles';
import { routNames } from 'constants/routNames';

function checkInitialRoute() {
  const { currentUser } = UserService;
  const admin = currentUser?.role === userRoles.Admin;
  if (currentUser) {
    if (admin) {
      return routNames.AdminScreens;
    } else {
      return routNames.UserScreens;
    }
  } else {
    return routNames.Auth;
  }
}

export { checkInitialRoute };
