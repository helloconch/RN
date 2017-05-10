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
  AsyncStorage,
  Button,
} from 'react-native';

const stu={
  name:'che',
  age:18
}


export default class KK extends Component {
  
  state={
    localData:'',
  }
  
   save=async()=>{
    const textData=JSON.stringify(stu);
    await AsyncStorage.setItem('stu',textData);
  }
  
   get=async()=>{
   const text= await AsyncStorage.getItem('stu');
   if(!text){
    this.setState({
      localData:'not value'
    });
   }else{
     const stu=JSON.parse(text);
     if(stu){
       this.setState({
         localData:stu.name,
       });
     }
   }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.localData}
        </Text>
        <Button title='保存' onPress={this.save}/>
        <Button title='取出' onPress={this.get}/>
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
