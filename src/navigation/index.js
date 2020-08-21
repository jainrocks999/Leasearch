import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Classes from '../screens/Classes';
import SplashScreen from '../screens/SplashScreen';
import LearnBlue from '../screens/LearnBlue';
import Webinar from '../screens/Webinar';
import Category from '../screens/Category';
import Article from '../screens/Article';
import Saved from '../screens/Saved';
import HomeScreen from '../screens/HomeScreen';
import ArticleDetail from '../screens/ArticleDetail/index';

const AuthNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    category: {
      screen: ArticleDetail,
    },
    article: {
      screen: Article,
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

// const details = createStackNavigator({
//   details: {
//     screen: ArticleDetails,
//   },
// });
const bottomTab = createBottomTabNavigator(
  {
    CLASSES: {
      screen: Classes,
      navigationOptions: {
        tabBarLabel: 'CALENDER',
      },
    },
    WEBINARS: {
      screen: Webinar,
      navigationOptions: {
        tabBarLabel: 'LEGAL UPDATE' + '\n' + 'PODCAST',
        //title: 'Ligit ',
      },
    },
    LEARNBLUE: {
      screen: LearnBlue,
      navigationOptions: {
        tabBarLabel: 'INTEROGATIONS',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',

      labelStyle: {
        fontSize: 14,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
      },
      style: {
        backgroundColor: '#0C1C5B',
        height: 65,
      },
    },
  },
);
const drawer = createDrawerNavigator({
  MainDrawer: bottomTab,
});
const drawerStack = createStackNavigator(
  {
    DrawerNav: drawer,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
const AuthStack = createSwitchNavigator({
  Auth: AuthNavigator,
  Tab: bottomTab,
  home: drawerStack,
  Details: {screen: ArticleDetail},
});

const RootApp = createAppContainer(AuthStack);
export default RootApp;
