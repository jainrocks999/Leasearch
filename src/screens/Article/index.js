import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

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
export default class LearnBlue extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          style={{width: '100%'}}
          data={arr}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('category');
                console.log('pressed');
              }}
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
