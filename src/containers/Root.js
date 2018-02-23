// @flow

import React from 'react';
import { TabNavigator } from 'react-navigation';
import ListScreen from '../containers/List';
import NearbyScreen from '../containers/Nearby';
import MeScreen from '../containers/Me';
import Config from '../Config';

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
      activeTintColor: Config.primaryColor,
    }
  }
);

export default Root;
