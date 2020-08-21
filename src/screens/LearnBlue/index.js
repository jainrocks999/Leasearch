import React from 'react';
import {Text, View, FlatList, Image, StatusBar, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import styles from './styles';
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
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.header}>
          <TouchableOpacity style={{height: 40, width: 30}}>
            <Image
              source={require('../../assets/Images/menu2.jpg')}
              style={styles.menu}
              resizeMode={'stretch'}
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 10, flexDirection: 'row'}}>
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

class Article extends React.Component {
  // details(){
  //   () => this.props.navigation.navigate('WEBINARS')
  // }

  render() {
    return (
      <View style={{backgroundColor: 'black', paddingTop: 50}}>
        <FlatList
          style={{width: '100%'}}
          data={arr}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Details')}
              style={{paddingHorizontal: 15, paddingVertical: 20}}>
              <Image
                source={item.image}
                style={{width: '100%', height: 150, borderRadius: 18}}
              />
              <View style={{marginTop: -50, paddingHorizontal: 10}}>
                <Text>{item.ItemName1}</Text>
                <Text>{item.ItemName2}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class Saved extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Saved!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Article: {
      screen: Article,
    },
    Saved: {
      screen: Saved,
    },
  },
  {
    tabBarOptions: {
      style: {
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
      <View style={{flex: 1}}>
        <LearnBlue />
        <RootNav />
      </View>
    );
  }
}

export default RootScreen;
