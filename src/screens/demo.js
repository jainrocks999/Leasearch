import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View, ListView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import axios from 'axios';

export default class APIDemo extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      
      dataSource: [],
      
    }
  }

  componentDidMount() {
    return axios.get(`https://e44e15f3fc09c786069fe83203b0832c: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@my-westside.myshopify.com/admin/api/2020-07/themes/82630967349/assets.json?asset[key]=config/settings_data.json`)
      .then(res => res.json()).then((response)=>{
        this.setState({dataSource:response.asset.value})
      }).catch(error=>{
        console.error(error);
      })
  
      console.log('yoyoyo');
  }
  

render(){
  return(
    <View style={{flex:1}}>
      <Text>Hey</Text>
       
   <FlatList
              style={{width: '99%', padding: 10}}
              data={this.state.dataSource}
              renderItem={({item}) => (
                <View>
<Text>{item.value}</Text>
<Text>hhhhhh</Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
            />

    </View>
  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ECF0F1',
    padding: 8
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center'
  }
});
