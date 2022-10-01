import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import Main from 'Main';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Require cycle:']);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
