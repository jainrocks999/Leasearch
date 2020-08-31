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
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import {withNavigation, DrawerActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
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
class CALENDAR extends React.Component {
  static navigationOptions = {
    title: 'CALENDAR',
    tabBarIcon: ({tintColor}) => (
      <Icon name="calendar" size={25} color="#1865A8" />
    ),
  };
  render() {
    const {navigation, Menu} = this.props;

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

        <ScrollView>
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
            data={Menu}
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
                      {item.title}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.playIcon}
                  onPress={() => {
                    Alert.alert('Video Pressed');
                  }}>
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
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
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
export default connect(mapStateToProps)(CALENDAR);
