import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Linking,
  View,
  Alert,
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
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CALENDER from '../screens/ButtomTabpage/calendar.js';
import WEBINARS from '../screens/ButtomTabpage/webniar';
import Learnblue from '../screens/ButtomTabpage/Learnblue';

//import Classes from '../screens/Classes';
import SplashScreen from '../screens/SplashScreen';
import LearnBlue from '../screens/ButtomTabpage/Learnblue';

//import Webinar from '../screens/Webinar';
import Category from '../screens/Category';
import Article from '../screens/Article/index';
import drawerPage from '../screens/DrawerPage';
//import Saved from '../screens/Saved';
import HomeScreen from '../screens/DrawerHomeScreen';
import ArticleDetail from '../screens/ArticleDetail/index';
import SearchScreen from '../screens/SearchScreen/index';

import DemoScreen from '../screens/demo';

const ArticleStack = createStackNavigator({
  artile: {
    screen: Article,
  },
  category: {
    screen: ArticleDetail,
  },
});
const SearchStack = createStackNavigator({
  SearchPage: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AuthNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },

    LearnBlue: {
      screen: LearnBlue,
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: false,
      };
    },
  },
);

const DrawerStack = createStackNavigator(
  {
    Drawer: {
      screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: false,
        title: '',
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: 'black',
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10, color: 'white'}}
            onPress={() => navigation.toggleDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
);
const AppStack = createDrawerNavigator(
  {
    Dashboard: DrawerStack,
  },
  {
    initialRouteName: 'Dashboard',
    contentComponent: drawerPage,
  },
);
const AuthStack = createSwitchNavigator({
  SplashScreen: SplashScreen,
  //Demo: DemoScreen,
  Auth: AuthNavigator,
  //Tab: bottomTab,
  AppStack: AppStack,
  // home: drawerStack,
  Article: ArticleStack,
  Details: {screen: ArticleDetail},
  Search: SearchStack,
});

const RootApp = createAppContainer(AuthStack);
export default RootApp;
