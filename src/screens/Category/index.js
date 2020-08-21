import React from 'react';
import { View,Text,ScrollView,Image,FlatList } from 'react-native';


var arr = [
    { image: require('../../assets/Images/tree.jpg'), ItemName1: 'Article title here',ItemName2:'Cotegory | july 15 2020'},
    { image: require('../../assets/Images/tree.jpg'), ItemName1: 'Article title here',ItemName2:'Cotegory | july 15 2020'},
    { image: require('../../assets/Images/tree.jpg'), ItemName1: 'Article title here',ItemName2:'Cotegory | july 15 2020'},
    { image: require('../../assets/Images/tree.jpg'), ItemName1: 'Article title here',ItemName2:'Cotegory | july 15 2020'},
    { image: require('../../assets/Images/tree.jpg'), ItemName1: 'Article title here',ItemName2:'Cotegory | july 15 2020'},
  
   
];
export default class Category extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'black'}}>
                <View>
            <FlatList
                    data={arr}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                    <View style={{paddingHorizontal:15}}>
                       <Image source={item.image} style={{width:350,height:200}}/>
                       <View style={{paddingHorizontal:10,marginTop:10}}>
                       <Text style={{color:'white'}}>{item.ItemName1}</Text>
                       <Text style={{color:'white'}}>{item.ItemName2}</Text>
                       </View>
                    </View>}
                    keyExtractor={(item, index) => index} />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{color:'white'}}>
                        Text Here
                    </Text>
                    </View>
            </View>
        )
    }
}