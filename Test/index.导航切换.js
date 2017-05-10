/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Parent from './parent';
import Child from './child';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Main: {screen: Parent},
  Profile: {screen: Child},
},{
  headerMode:'float'
});
AppRegistry.registerComponent('KK', () => App);
