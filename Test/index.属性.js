/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


class Greeting extends Component{
  render(){
    return (

     <Text>Hello {this.props.name}</Text>

    );
  }
}

export default class TTT extends Component {

  render() {

   let picUrl={
     uri:'https://github.com/helloconch/TT/blob/master/right_corner_test.png?raw=true'
   };

    return (
      <View style={styles.container}>
        <Greeting name='BJ'/>
        <Greeting name='SD'/>
        <Image source={picUrl} style={{width:100,height:100}}/>
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
