import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {init} from './App';
import {Provider} from 'react-redux';
import Route from './route.index';

const store = init();

export const AppInit = () => {
  console.log('store: ', store.getState());
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

AppRegistry.registerComponent('appName', () => AppInit);
