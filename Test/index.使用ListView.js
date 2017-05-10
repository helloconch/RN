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
  ListView,
} from 'react-native';

export default class TTT extends Component {

state:{
  dataSource:Object;
}

 constructor(props:Object){
   super(props);
   const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
   this.state={
     dataSource:ds.cloneWithRows(['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','A16'])
   }
 }

  render() {
    return (
      <View style={[styles.container,{padding:100}]}>
           <ListView dataSource={this.state.dataSource} renderRow={(rowdata)=><Text>{rowdata}</Text>} />
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
