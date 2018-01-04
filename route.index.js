import {StackNavigator} from 'react-navigation';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import React, { Component } from 'react';

export default StackNavigator({
  First : {
    screen: FirstPage,
    title : 'First Screen'
  },
  Second : {
    screen: SecondPage,
    title : 'First Screen'
  }
});
