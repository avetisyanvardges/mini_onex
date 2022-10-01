import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

class _userService extends Component {
  userRole = null;
  currentUser = null;
  constructor() {
    super();
    this.getUser();
  }
  async setUser(data) {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(data));
    } catch (e) {
      console.log(e, 'UserService:setUser');
    }
  }

  async getUser() {
    const currentUser = await AsyncStorage.getItem('currentUser')
      .then((res) => JSON.parse(res))
      .catch((e) => console.log(e, 'UserService:getUser'));
    this.userRole = currentUser?.role;
    this.currentUser = currentUser;
    return currentUser;
  }
}
const UserService = new _userService();
export { UserService };
