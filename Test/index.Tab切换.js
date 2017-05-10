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
import Movie from './movies';
import Me from './me';
import Child from './child';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
const MyTab=TabNavigator({
  Movie:{screen:Movie},
  Me:{screen:Me},
},{
  tabBarOptions: {
  activeTintColor: '#0390EB',
  inactiveTintColor:'#fff',
  labelStyle: {
    fontSize: 16,
    marginBottom:15
  },
  style: {
    backgroundColor: '#222',
  },
}

});

const App = StackNavigator({
  Main: {screen: MyTab},
  Profile: {screen:Child},
});

AppRegistry.registerComponent('KK', () => App);
