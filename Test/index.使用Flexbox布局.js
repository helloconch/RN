/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *flexDirection决定布局的主轴默认竖直方向
 *justifyContent决定子元素沿着主轴的排列方式flex-start flext-end center space-around space-between
 *alignItems决定子元素沿着次轴排列方式 flex-start center flex-end stretch
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TTT extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <View style={{width:50,height:50,backgroundColor:'#f00'}}/>
        <View style={{width:50,height:50,backgroundColor:'#0f0'}}/>
        <View style={{width:50,height:50,backgroundColor:'#00f'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TTT', () => TTT);
