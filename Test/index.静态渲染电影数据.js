/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import Item from './item';
import movies from './movies.json';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
const spaceMargin = 10;
export default class Keep extends Component {

  render() {
    return (
      <View style={styles.outRoot}>
          <View style={styles.message}>
          </View>
    
         <FlatList
           numColumns={3}
           columnWrapperStyle={styles.row}
           keyExtractor={item=>item.id}
           data={movies.subjects}
           renderItem={({item})=><Item title={item.title} imageUrl={item.images.medium} stars={item.rating.stars} /> }
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outRoot: {
    flex: 1,
    marginBottom:spaceMargin,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: spaceMargin,
  },
  message: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 20,
    borderColor: 'black',
    borderWidth: 30,
  }
});

AppRegistry.registerComponent('Keep', () => Keep);