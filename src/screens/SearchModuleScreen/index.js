import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  TextInput,
  StatusBar,
  ImageBackground,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SliderBox} from 'react-native-image-slider-box';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class HomeScreen extends React.Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  constructor() {
    super();
    this.state = {
value:'',
ContactList:[],
    }
     this.arrayholder = [];
  }

  openurl = (data) => {
   
    const {navigation, Menu, Footer, NewsFeed} = this.props;
    NewsFeed.map((item, index) => {
     
      if (index == data) {
        

        Linking.openURL(item.link);
      }
    });
  };


   searchFilterFunction = text => {
        this.setState({
            value: text,
        });
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.title.toUpperCase()} ${item.title.toUpperCase()}}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            ContactList: newData,
        });
    };

  render() {
    let arr = [];
    const {navigation, Menu, Footer, NewsFeed} = this.props;
     this.arrayholder = Menu;
    NewsFeed.map((item, key) => arr.push(item.image));

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <TouchableOpacity
          style={{height: 40, width: 30, marginTop: 15}}
          onPress={() => {
            this.props.navigation.navigate('HomeScreenPage');
          }}>
          <Image
            source={require('../../assets/Images/pp.png')}
            resizeMode={'stretch'}
            style={styles.iconMenu}
          />
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{width: 25, height: 25}}>
            <Image
              source={require('../../assets/Images/search.png')}
              style={{width: '100%', height: '100%', marginRight: 10}}
              resizeMode={'center'}
            />
          </View>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              marginLeft: 10,
color:'white',
              width: '85%',
            }}
            value={this.state.value}
            placeholder={'Search all Categories & topics '}
            placeholderTextColor={'grey'}
              onChangeText={text => this.searchFilterFunction(text)}
          />
        </View>

        <ScrollView style={{flex: 1, marginTop: 10, paddingHorizontal: 10}}>
          <View style={{padding: 4, marginTop: 1}}>
            <FlatList
              style={{width: '99%'}}
              data={Menu}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Search', {
                      DetailsKey: item.object_id,
                    });
                  }}
                  style={{width: '100%'}}>
                  <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={require('../../assets/Icons/a_icon.png')}
                        style={{
                          height: '90%',
                          width: '90%',
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text style={{color: 'white', fontSize: 14}}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
    Footer: state.Footer,
    NewsFeed: state.NewsFeed,
  };
};
export default connect(mapStateToProps)(HomeScreen);
