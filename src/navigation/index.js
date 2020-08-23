import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Linking, View, Alert, ScrollView, ActivityIndicator,Share, Text, Picker, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/Ionicons";
import CALENDER from '../screens/ButtomTabpage/calendar.js';
import WEBINARS from '../screens/ButtomTabpage/webniar';
import Learnblue from '../screens/ButtomTabpage/Learnblue';

//import Classes from '../screens/Classes';
import SplashScreen from '../screens/SplashScreen';
//import LearnBlue from '../screens/LearnBlue';
//import Webinar from '../screens/Webinar';
import Category from '../screens/Category';
//import Article from '../screens/Article';
import drawerPage from '../screens/DrawerPage';
//import Saved from '../screens/Saved';
import HomeScreen from '../screens/DrawerHomeScreen';
import ArticleDetail from '../screens/ArticleDetail/index';

const AuthNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    category: {
      screen: ArticleDetail,
    },
    // article: {
    //   screen: Article,
    // },
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
// Profile: ProfileStack,
//Notification: NotificationStack,
// About: AboutStack,
//Contact: ContactStack,
//AddIssue: IssueStack,
},
{
initialRouteName: 'Dashboard',
contentComponent: drawerPage,
},
);
const AuthStack = createSwitchNavigator({
  Auth: AuthNavigator,
  //Tab: bottomTab,
  AppStack:AppStack,
 // home: drawerStack,
  Details: {screen: ArticleDetail},
});

const RootApp = createAppContainer(AuthStack);
export default RootApp;
