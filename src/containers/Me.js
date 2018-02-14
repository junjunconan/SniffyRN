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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Me extends Component {
  static navigationOptions = {
    title: 'Me',
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor, focused }) => (
      <Image
        resizeMode="contain"
        source={
          require('../images/meTab.png')
        }
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Me);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
