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

export default class Movie extends Component{
  static navigationOptions = {
    title: '影院页',
  };
  render(){
    const {state,goBack}=this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>影院页 content</Text>
      </View>
    );
  }
}