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

class Blink extends Component{
 state:{
  showText:boolean
 }
 constructor(props:Object){
   super(props);
   this.state={showText:true};
   //每1秒对showText做一次取反操作
   setInterval(()=>{
     this.setState({showText:!this.state.showText});
   },1000);
 }

  render(){

   let content=this.state.showText?this.props.title:'';

    return (

    <Text>{content}</Text>

    );
  }
}

export default class TTT extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Blink title='I love to Blink1'/>
        <Blink title='I love to Blink2'/>
        <Blink title='I love to Blink3'/>
        <Blink title='I love to Blink4'/>
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
