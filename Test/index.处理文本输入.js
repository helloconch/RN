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
  TextInput,
  View
} from 'react-native';

export default class TTT extends Component {
  state:{
    showContent:string
  }

  constructor(props:Object){
    super(props);
    this.state={
          showContent:''
    };
  }
  render() {
    return (
      <View style={[styles.container,{padding:100}]}>
       <TextInput style={{height:40}} placeholder='type here to translate' onChangeText={(showContent)=>this.setState({showContent})} />

       <Text style={{marginTop:100,fontSize:42}}>{this.state.showContent}</Text>
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
