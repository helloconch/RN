import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

const styles=StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Parent extends Component{
  
   static navigationOptions = {
    title: 'parent标题',
  };
  state={
    childState:'',
  }
  callBack=(v)=>{
    this.setState({
      childState:v
    });
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>parent content</Text>
        <Button
          title='跳转到child page'
          onPress={()=>navigate('Profile',{content:'hello child',method:this.callBack})}
        />
        <Text>{this.state.childState}</Text>
      </View>
    );
  }
}