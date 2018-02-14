// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Config from '../Config';

class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
