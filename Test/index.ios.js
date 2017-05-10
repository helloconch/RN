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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Item from './item';
const spaceMargin = 10;
const url='https://api.douban.com/v2/movie/in_theaters';
let refreshState=false;
let startPage=0;
const pageSize=12;
export default class Keep extends Component {
  constructor(props){
    super(props);
  }
  state={
    movies:[],
    refreshing:false,
    ready:false,
  };
  fetchData=()=>{
    if(thirefreshState){
      return;
    }
    this.refreshState=true;
    this.setState({
      refreshing:true,
    });
    fetch(`${url}?start=${startPage}&count=${pageSize}`)
    .then((response)=>response.text())
    .then((responseText)=>{
      const json=JSON.parse(responseText);
      this.setState({
        movies:json.subjects,
        refreshing:false,
      });
    this.refreshState=false;
    }).catch((error)=>{
     console.error(error);
    })
  }
  
  obtain= async()=>{
    try{
    let resposne=await fetch(`${url}?start=${startPage}&count=${pageSize}`);
    let resposneJson=await resposne.json();
    this.setState({
      movies:resposneJson.subjects,
      ready:true,
    });
    }catch(error){
      console.log(error);
    }
  }
  
  fetchMore=async ()=>{
  console.log('fetchMore.......');
     this.setState({
      refreshing:true,
    });
   let resposne=await fetch(`${url}?start=${++startPage}&count=${pageSize}`);
   let resposneJson=await resposne.json();
    this.setState({
      movies:this.state.movies.concat(resposneJson.subjects),
      ready:true,
      refreshing:false,
    });
  }
  
  componentDidMount(){
//     this.fetchData();
    this.obtain();
  }
  render() {
    const {movies,refreshing,ready}=this.state;
    return (
     <View style={styles.outRoot}>
         {ready?
         <FlatList
           numColumns={3}
           columnWrapperStyle={styles.row}
           keyExtractor={item=>item.id}
           onRefresh={this.obtain}
           onEndReached={this.fetchMore}
           refreshing={refreshing}
           onEndReachedThreshold={0}
           ListFooterComponent={()=>{
            return refreshing&& <ActivityIndicator size='large'/>
          }}
           data={movies}
           renderItem={({item})=><Item title={item.title} imageUrl={item.images.medium} stars={item.rating.stars} /> }
           />
           :<ActivityIndicator size='large'/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outRoot: {
    flex: 1,
    marginBottom:spaceMargin,
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: spaceMargin,
  },
});

AppRegistry.registerComponent('KK', () => Keep);
