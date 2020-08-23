import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './style';
import {withNavigation, DrawerActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

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
export default class Classes extends React.Component {
  static navigationOptions = {
      title: 'CALENDAR',
    tabBarIcon: ({tintColor}) => (
      <Icon name="calendar" size={30} color="#1865A8" />
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
        <View style={styles.iconSearch}>
          <Image
            source={require('../../assets/Icons/search_icon.png')}
            style={styles.iconSearch1}
            resizeMode={'contain'}
          />

          <TextInput
            placeholder="Search for all Categories,topic etc"
            placeholderTextColor="grey"
            style={styles.input}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.all}>All Categories</Text>
          <View style={styles.slider}></View>
        </View>
        <FlatList
          data={arr}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.view1}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.view2}>
                  <Image
                    source={item.image}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    Fourth Amendment Searches
                  </Text>
                  <Text style={styles.article}>31 articles</Text>
                </View>
              </View>
              <View style={styles.playIcon}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('../../assets/Icons/list_icon.png')}
                />

                {/* <Text style={{color: 'white', alignSelf: 'center'}}>Play</Text> */}
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
