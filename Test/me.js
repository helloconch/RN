import React, {Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles=StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Me extends Component{
  static navigationOptions = {
    title: '我的',
  };
  render(){
    const {state,goBack}=this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>我的 content</Text>
      </View>
    );
  }
}