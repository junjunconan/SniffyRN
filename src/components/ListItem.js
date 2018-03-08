// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import Config from '../Config';

export default class ListItem extends Component {

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[item.category_color_left, item.category_color_right]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
          style={styles.linearGradient}
        >
          <View style={styles.top}>
            <View style={styles.left}>
              <FastImage
                style={styles.brandingLogo}
                source={{uri: item.branding_logo_url}}
                resizeMode={FastImage.resizeMode.contain}
              />
              <View style={styles.content}>
              </View>
            </View>
            <View style={styles.right}>
              
            </View>
          </View>
          <View style={styles.bottom}>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Config.windowWidth,
    height: 180,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#666',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: 'white',
    height: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  left: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  right: {
    flex: 1,
  },
  brandingLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});
