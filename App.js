import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {createStore, combineReducers} from 'redux';
import RahmaReducer from './rahma.reducer';
import AtriaReducer from './atria.reducer';

export const init = () => createStore(combineReducers({
  rahma: RahmaReducer,
  atria: AtriaReducer,
}));
