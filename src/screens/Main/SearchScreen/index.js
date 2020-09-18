import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import SearchStyles from './style';
import {connect} from 'react-redux';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  renderSeparator = () => {
    return <View style={SearchStyles.renderSeparator} />;
  };
  constructor() {
    super();
    this.state = {
      value: '',
      ContactList: [],
    };
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

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter((item) => {
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
      <View style={SearchStyles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <TouchableOpacity
          style={SearchStyles.header}
          onPress={() => {
            this.props.navigation.navigate('HomeScreenPage');
          }}>
          <Image
            source={require('../../../assets/Icons/homeIcon.png')}
            resizeMode={'stretch'}
            style={SearchStyles.iconMenu}
          />
        </TouchableOpacity>

        <View style={SearchStyles.searchBox}>
          <View style={SearchStyles.searchIconView}>
            <Image
              source={require('../../../assets/Icons/searchIcon.png')}
              style={SearchStyles.searchIcon}
              resizeMode={'center'}
            />
          </View>
          <TextInput
            style={SearchStyles.searchInput}
            value={this.state.value}
            placeholder={'Search all Categories & topics '}
            placeholderTextColor={'grey'}
            onChangeText={(text) => this.searchFilterFunction(text)}
          />
        </View>

        <ScrollView style={SearchStyles.scrollView}>
          <View style={SearchStyles.mainView}>
            <FlatList
              style={SearchStyles.flatlist}
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
                  style={SearchStyles.flatlistTouch}>
                  <View style={SearchStyles.flatlistView}>
                    <View style={SearchStyles.flatlistIconView}>
                      <Image
                        source={require('../../../assets/Icons/a_icon.png')}
                        style={SearchStyles.flatlistIcon}
                      />
                    </View>
                    <View>
                      <Text style={SearchStyles.text}>{item.title}</Text>
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
