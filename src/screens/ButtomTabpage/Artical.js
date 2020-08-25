import React from 'react';
import {Text, View, FlatList, Image, StatusBar, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import styles from './style';
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
              onPress={() => this.props.navigation.navigate('category')}
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
export default Article;
