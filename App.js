import React from 'react';
import Router from './app/navigation/Router';
import {Provider} from 'react-redux';

import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
