// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';

import MapView from 'react-native-maps';

import Config from '../Config';

class Nearby extends Component {
  static navigationOptions = {
    title: 'Nearby',
    tabBarLabel: 'Nearby',
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        resizeMode="contain"
        source={require('../images/nearbyTab.png')}
        style={{
          tintColor: focused ? Config.primaryColor : Config.secondaryColor,
        }}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
