// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
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
          source={require('../images/listTab.png')}
          style={{
            tintColor: focused ? Config.primaryColor : Config.secondaryColor,
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: '60% OFF',
        }
      ],
    };
  }

  render() {
    const { navigation, user } = this.props;
    const { data } = this.state;

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
