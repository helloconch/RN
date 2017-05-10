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
  TouchableHighlight,
} from 'react-native';

const names=['H1','H2','H3','H4','H5','H6','H7','H8','H10'];

class GoodMorning extends Component{
   age=1;
  static defaultProps={
    name:''
  }
  
  static propTypes={
//     name:React.propTypes.string
  }
  
  constructor(props){
    super(props);
  }
  
  render(){
    let age=2;
    return (
    <View>
        <Text>{this.props.name}</Text>
    </View>
    );
  }
}

const GoodEve=(props)=>{
  return (
  <Text>{props.name}</Text>
  );
}


export default class TTT extends Component {
  
  _onPressButton(){
    alert('aa');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight onPress={this._onPressButton}>
        <Text>Button2</Text>
        </TouchableHighlight>
        <GoodMorning name='che'/>
        <GoodEve name='yx'/>
        {
        names.map((n,index)=><GoodMorning key={index} name={n} />)
        }
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
