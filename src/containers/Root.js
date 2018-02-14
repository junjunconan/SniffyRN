// @flow

import React from 'react';
import { TabNavigator } from 'react-navigation';
import ListScreen from '../containers/List';
import NearbyScreen from '../containers/Nearby';
import MeScreen from '../containers/Me';

const Root = TabNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Nearby: {
      screen: NearbyScreen,
    },
    Me: {
      screen: MeScreen,
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'black'
    }
  }
);

export default Root;
