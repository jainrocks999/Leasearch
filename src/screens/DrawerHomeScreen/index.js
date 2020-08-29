import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CALENDER from '../ButtomTabpage/calendar.js';
import WEBINARS from '../ButtomTabpage/webniar';
import Learnblue from '../ButtomTabpage/Learnblue';
//import UpcomingPage from '../../ButtomTabpage/upcoming';

const Navegador = createBottomTabNavigator(
  {
    CALENDER: {
      screen: CALENDER,
    },
    WEBINARS: {
      screen: WEBINARS,
    },
    Learnblue: {
      screen: Learnblue,
    },
  },
  
  {
    initialRouteName:'WEBINARS',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
     
      

      labelStyle: {
        fontSize: 12,
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

export default Navegador;
