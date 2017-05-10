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
  TouchableOpacity
} from 'react-native';

export default class TTT extends Component {
  
  state={
    count:30
  }
  
  
  
  componentWillMount(){
    
  }
  
  componentDidMount(){
    this.timer=setInterval(()=>{
      const {count}=this.state;
      if(count===0){
        return clearInterval(this.timer);
      }
      
      this.setState({
        count:count-1
      });
    },1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  
  press1=()=>{
    alert('press1');
  }
  
  press2(){
    return(
     <Text>hello 123</Text>
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.state.count}
        </Text>
        
        <TouchableOpacity onPress={this.press2}>
        {this.press2()}
        </TouchableOpacity>
        
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
