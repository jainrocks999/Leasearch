import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import  styles from './styles';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Text onPress={this.props.navigation.toggleDrawer}>
                     hi
                 </Text>
            </View>
        )
    }
}