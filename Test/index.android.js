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
  View,
  Button,
  Linking
} from 'react-native';
const url='https://vt1.doubanio.com/201704252209/2494a14fb1054657f2a4e70f43da9103/view/movie/M/301080756.mp4';
export default class KK extends Component {
  
  play=()=>{
    Linking.openURL(url);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button title='play' onPress={this.play}/>
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

AppRegistry.registerComponent('KK', () => KK);
