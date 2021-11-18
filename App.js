//npm
import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './src';
import {store} from './src/store/reducers';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
