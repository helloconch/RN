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

export default class Child extends Component{
  static navigationOptions = {
    title: 'child标题',
  };
  render(){
    const {state,goBack}=this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>child content</Text>
        <Text>传递过来的值为:{state.params.content}</Text>
        <Button title='传递值给上一级' onPress={()=>{
            state.params.method('helloParent');
            goBack();
          }}/>
      </View>
    );
  }
}