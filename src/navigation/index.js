import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '../screens/Auth/SplashScreen';
import SubHomeDetailScreen from '../screens/Main/SubHomeDetailScreen';
import HomeDetailScreen from '../screens/Main/HomeDetailScreen';
import HomeScreenPage from '../screens/Main/HomeScreen';
import SearchScreen from '../screens/Main/SearchScreen/index';

const HomeScreenStack = createStackNavigator({
  HomeScreenPage: {
    screen: HomeScreenPage,
  },
  SearchPage: {
    screen: HomeDetailScreen,
  },
  detail: {
    screen: SubHomeDetailScreen,
  },
});

const SearchModuleScreenStack = createStackNavigator({
  SearchModuleScreen: {
    screen: SearchScreen,
  },
});
const AuthNavigator = createStackNavigator({
  splash: {
    screen: SplashScreen,
  },
});
const AuthStack = createSwitchNavigator({
  SplashScreen: SplashScreen,
  HomeScreenStack: HomeScreenStack,
  Auth: AuthNavigator,
  SearchModuleScreen: SearchModuleScreenStack,
});

const RootApp = createAppContainer(AuthStack);
export default RootApp;
