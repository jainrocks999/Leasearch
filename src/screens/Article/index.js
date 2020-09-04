import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { connect } from 'react-redux';
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
    const {navigation,Menu}=this.props
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
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
  };
};
export default connect(mapStateToProps)(LearnBlue);