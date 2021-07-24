import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Store from './app/config/redux/Store';
import Drawer from './app/modules/drawer/view/Drawer';

const {persistor, store} = Store();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Drawer />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
