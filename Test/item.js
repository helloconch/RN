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
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const{width,height}=Dimensions.get('window');

const spaceMargin=10;

const imageWidth=(width-spaceMargin*4)/3;

const imageHeight=width/3/0.8;

const itemHeight=imageHeight+30;

//第一种方式
// export default class TTT extends Component {
//   render() {
//     const{title,imageUrl}=this.props;
//     return (
//       <View style={styles.root}>
//         <Image 
//           style={styles.contentImg}
//           source={{uri:imageUrl}}/>
        
//         <Text numberOfLines={1} style={styles.title}>{title}</Text>
//       </View>
//     );
//   }
// }

class StarObj{
  constructor(key){
    this.key=key;
  }
}

const renderStarts=(stars)=>{
  if(stars==='00')return;
  const total=5;
  let full,half,empty;
  full=parseInt(stars[0])-1;
  if(stars[1]===5){
    full++;
    half=0;
    empty=total-full;
  }else{
    half=1;
    empty=total-full-half;
  }
  const fullArray=[];
  const halfArray=[];
  const emptyArray=[];
  const results=[];
  for(let i=0;i<full;i++){
    fullArray.push(new StarObj('f:'+i));
  }
  for(let i=0;i<half;i++){
    halfArray.push(new StarObj('h:'+i));
  }
  for(let i=0;i<empty;i++){
    emptyArray.push(new StarObj('e:'+i));
  }
  
  fullArray.map(item=>{
   return results.push(<Image key={item.key} 
                   style={{width:10,height:10}}
                   source={require('./img/star-full.png')}/>)});
  
  halfArray.map(item=>results.push(<Image key={item.key} 
                   style={{width:10,height:10}}
                   source={require('./img/star-half.png')}/>));

  emptyArray.map(item=>results.push(<Image key={item.key} 
                   style={{width:10,height:10}}
                   source={require('./img/star-empty.png')}/>));
  return (
  
    <View style={{flexDirection:'row'}}>
    {results}
    </View>
  
  );
}


//由于无状态state，更改为纯函数式组件

const Item=(props)=>{
  const{title,imageUrl,stars}=props;
  return (
      <View style={styles.root}>
        <TouchableOpacity>
        <Image 
          style={styles.contentImg}
          source={{uri:imageUrl}}/>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
       {renderStarts(stars)}
      </View>
    );
}

export default Item;



const styles = StyleSheet.create({
  root:{
    marginTop:20,
    width:imageWidth,
    height:itemHeight,
    marginRight:spaceMargin,
    alignItems:'center'
  },
  
  contentImg:{
    width:imageWidth,
    height:imageHeight,
  },
  
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:5,
  }
});
