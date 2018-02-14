// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class List extends Component {
  static navigationOptions = props => {
    const { navigation } = props;

    return {
      title: 'List',
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image
          resizeMode="contain"
          source={
            focused ?
            require('../images/listTabSelected.png')
            :
            require('../images/listTab.png')
          }
        />
      ),
    };
  };

  render() {
    const { navigation, user } = this.props;

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

export default connect(mapStateToProps, mapDispatchToProps)(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
