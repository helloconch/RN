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
  Image,
  View
} from 'react-native';

export default class KK extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/one.jpeg')} style={styles.image}>
          <Image source={require('./img/play-icon.png')} style={styles.icon}/>
        </Image>
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
  image:{
    overflow:'visible',
    zIndex:1,
  },
  icon:{
    width:100,
    height:100,
    position:'absolute',
    right:0,
    top:-50,
  }
});

AppRegistry.registerComponent('KK', () => KK);
