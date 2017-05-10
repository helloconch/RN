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
  TouchableOpacity,
} from 'react-native';

export default class TTT extends Component {

  constructor(props){
    super(props);
    this.state={count:0}
  }
  
  
  pressBtn=()=>{
    const {count}=this.state;
    this.setState({
      count:count+1,
    });
  }
  
  _pressBtn1(){
    alert('aa');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pressBtn}>
           <Text style={styles.welcome}>
              点赞
           </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          {this.state.count}
        </Text>
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
