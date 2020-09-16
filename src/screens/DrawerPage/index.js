import React from 'react';
import {
  Linking,
  View,
  Alert,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Share,
  Text,
  Picker,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
];
class MyDrawer extends React.Component {
  constructor(props) {
   
    super(props);
    this.state = {
      name: '',
      mobile: '',
      Number: '',
      // pimage: require('../images/user.png'),
      currentpage: '',
    }
    this.fetchData();
  }
       fetchData=async()=>{
     this.props.dispatch({type:'Fetch_Menu_Request',url:'menu'})
       }
  getprofile = () => {
    this.props.navigation.navigate('Profile');
  };
  renderDrawerItem = (route) => {
    console.log('jbkbjbjdbhjbd' + route.key);
    const onpress =
      route.key === 'Logins'
        ? () =>
            AsyncStorage.clear().then((p) =>
              this.props.navigation.navigate(route.key),
            )
        : route.key === 'logout'
        ? () => this.Logout()
        : () => {
            this.setState({currentpage: route.key});
            this.props.navigation.navigate(route.key);
            AsyncStorage.getItem('user').then((Name) => {
              this.setState({name: Name});
            });
            AsyncStorage.getItem('contact_number').then((number) => {
              this.setState({Number: number});
            });
            AsyncStorage.getItem('Profile_Image').then((pi) => {
              console.log(pi);
              if (pi) {
                this.setState({
                  pimage: {
                    uri:
                      'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
                      pi,
                  },
                });
              }
            });
          };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={{
          flexDirection: 'row',
          padding: 8,
          marginLeft: 8,
          marginRight: 8,
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
        }}>
        <Text
          style={{
            padding: 8,
            color: '#000',
            marginLeft: 10,
            marginRight: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {route.label}
        </Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    console.log('kapil jaijnn' + this.props.Menu);
    AsyncStorage.getItem('use').then((Name) => {
      this.setState({name: Name});
    });
    AsyncStorage.getItem('contact_number').then((number) => {
      this.setState({Number: number});
    });
    AsyncStorage.getItem('Profile_Image').then((pi) => {
      console.log(pi);
      if (pi) {
        this.setState({
          pimage: {
            uri:
              'http://dev2.sbsgroupsolutions.co.in/admin/uploads/userprofile/' +
              pi,
          },
        });
      }
    });
  }
  setlog = () => {
    AsyncStorage.clear();
    AsyncStorage.setItem('USER_ID', '');
    // LanguagesString.setLanguage('en')
    this.props.navigation.navigate('Other');
  };
  sharefb = () => {
    Linking.openURL('https://www.facebook.com/chandrakar.ajay/');
  };
  shareTwitter = () => {
    Linking.openURL('https://twitter.com/chandrakar_ajay?lang=en');
  };
  Logout = () => {
    console.log('kbdsbdjhsbdb');
    Alert.alert(
      'Are you want to logout ?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => {
            cancelable: false;
          },
          style: 'cancel',
        },
        {text: 'ok', onPress: () => this.setlog()},
      ],
      {cancelable: false},
    );
    // Alert.alert("Logout","Are u want to logout ?");
  };
  ShareVoter = () => {
    Linking.openURL('https://www.nvsp.in/');
  };
  shareinsta = () => {
    Linking.openURL('https://www.instagram.com/chandrakar_ajay/?hl=en');
  };

  render() {
    const {navigation, Menu} = this.props;
    
    return (
      <ScrollView>
        <View style={{}}>
          <View style={styles.bluebox}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                source={this.state.pimage}
                style={{
                  width: 60,
                  height: 60,
                  margin: 8,
                  alignItems: 'center',
                  borderRadius: 35,
                }}
              />
              <View style={{marginTop: 8, marginLeft: 4}}>
                <Text style={styles.TextStyle}>Lea Search</Text>
                <Text style={styles.TextStyle}>{this.state.name}</Text>
                <Text style={{color: '#278D27', fontSize: 16}}>
                  {this.state.Number}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{height: 1, backgroundColor: '#000'}}></View>
          </View>

          {/* <FlatList
           data={Menu}
           showsVerticalScrollIndicator={false}
           ItemSeparatorComponent={this.renderSeparator}
           numColumns={2}
            renderItem={({item}) => {
               this.renderDrawerItem({
                label: item.title,
                key: item.key,
                color: '#000',
               });
             }}
          /> */}

         <FlatList
          style={{width: '100%'}}
          data={Menu}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.renderSeparator}
              numColumns={1}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('category')}
              style={{paddingHorizontal: 15, paddingVertical: 20}}>
            
              <View style={{marginTop: -50, paddingHorizontal: 10}}>
                <Text style={{color:'#000'}}>{item.post_type}</Text>
         
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
     
        </View> 
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    //  backgroundColor: '#fff',
  },
  bluebox: {
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  ImageStyle: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '40%',
    marginLeft: 10,
    height: 40,
  },
  TextStyle: {
    color: '#000',
    marginTop: 4,
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'+JSON.stringify(state.Menu))
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
  };
};

export default connect(mapStateToProps)(MyDrawer);
