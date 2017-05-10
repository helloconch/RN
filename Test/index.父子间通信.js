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


class CountDown extends Component{
  
  state={
    count:5,
  };
  
   componentDidMount(){
    this.timer=setInterval(()=>{
      const {count}=this.state;
      if(count==0){
        this.over();
       return clearInterval(this.timer);
      }
      this.setState({
        count:count-1,
      });
    },1000);
  }
  
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  add=(time)=>{
   this.setState({
     count:this.state.count+time
   });
  }
  
  over=()=>{
//     alert('timer is over');
    //倒计时结束，调用父组件的事件函数
    this.props.timeOverParent&&this.props.timeOverParent();
  }
  
  render(){
    return (
    <Text>{this.state.count}</Text>
    );
  }
}

export default class TTT extends Component {
//   调用子组件里的事件
  addTime=()=>{
    this.countDown.add(5);
  }
  
  timeOverParent=()=>{
    alert('父组件收到了');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.addTime}>
        <Text style={styles.welcome}>
          延长5s
        </Text>
        </TouchableOpacity>
        <CountDown ref={countDown=>this.countDown=countDown} timeOverParent={this.timeOverParent}/>
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
