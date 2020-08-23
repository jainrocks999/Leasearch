import React from 'react';
import {Text, View, FlatList, Image, StatusBar, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import styles from './style';
import Artical from './Artical.js';
import Saved from './Saved.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

var arr = [
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
  {
    image: require('../../assets/Images/tree.jpg'),
    ItemName1: 'Article title here',
    ItemName2: 'Cotegory | july 15 2020',
  },
];

class LearnBlue extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'black'}}>
     
       
        <View style={{padding: 10,marginTop:-10, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={{width: 18, height: 18, marginTop: 5}}
            resizeMode={'contain'}
          />
          <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
            Parent Name
          </Text>
        </View>
      </View>
    );
  }
}
const TabNavigator = createMaterialTopTabNavigator(
  {
    Article: {
      screen: Artical,
    },
    Saved: {
      screen: Saved,
    },
  },
  {
    tabBarOptions: {
      color:'#000',
      backgroundColor:'#000',
      style: {
        width:180,
        marginLeft:10,
        fontSize:14,
        color:'black',
        backgroundColor: 'black',
      },
    },
  },
);

const RootNav = createAppContainer(TabNavigator);

class RootScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      // <Image
      //   style={{height: 20, width: 20}}
      //   source={require('../../assets/Images/book.jpg')}
      // />
      <Icon name="book-open" size={30} color="#1865A8" />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={this.props.navigation.toggleDrawer}>
          <Image
            source={require('../../assets/Images/menu2.jpg')}
            resizeMode={'stretch'}
            style={styles.iconMenu}
          />
        </TouchableOpacity>
       
        <LearnBlue />
        <RootNav />
    
      </View>
    );
  }
}

export default RootScreen;