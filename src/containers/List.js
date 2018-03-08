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

import ListItem from '../components/ListItem';

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
          "id": 6,
          "discount_rate": 0.3,
          "is_favoured": false,
          "branding_id": 5,
          "branding_logo_url": "https://uploads.sniffyapp.com/uploads/branding/logo/5/BCF-Logo.png",
          "branding_name": "BCF",
          "category_title": "产品特促",
          "category_color_left": "#30d728",
          "category_color_right": "#31d194",
          "expire_date": "2018-03-09",
          "title": "流浪者紧凑型椅子",
          "token": "9fyCudnFq2CNAN67p3VmRM1c",
          "share_url": "http://sniffyapp.com/dd_share?token=9fyCudnFq2CNAN67p3VmRM1c"
        },
        {
          "id": 5,
          "discount_rate": 0.4,
          "is_favoured": false,
          "branding_id": 9,
          "branding_logo_url": "https://uploads.sniffyapp.com/uploads/branding/logo/9/Supercheap_logo.jpg",
          "branding_name": "Supercheap Auto",
          "category_title": "产品特促",
          "category_color_left": "#30d728",
          "category_color_right": "#31d194",
          "expire_date": "2018-03-21",
          "title": "Stanley 机械工具箱 - 201件",
          "token": "NinNbv5PKYzWLcfQekAxVb8r",
          "share_url": "http://sniffyapp.com/dd_share?token=NinNbv5PKYzWLcfQekAxVb8r"
        },
        {
          "id": 4,
          "discount_rate": 0.55,
          "is_favoured": false,
          "branding_id": 9,
          "branding_logo_url": "https://uploads.sniffyapp.com/uploads/branding/logo/9/Supercheap_logo.jpg",
          "branding_name": "Supercheap Auto",
          "category_title": "产品特促",
          "category_color_left": "#30d728",
          "category_color_right": "#31d194",
          "expire_date": "2018-03-21",
          "title": "嘉实多磁护引擎机油-10W-40, 5 升",
          "token": "Zo7JGXmSNbvgXF2EcB7FK7DN",
          "share_url": "http://sniffyapp.com/dd_share?token=Zo7JGXmSNbvgXF2EcB7FK7DN"
        },
        {
          "id": 3,
          "discount_rate": 0.58,
          "is_favoured": false,
          "branding_id": 6,
          "branding_logo_url": "https://uploads.sniffyapp.com/uploads/branding/logo/6/cygnett-logo.png",
          "branding_name": "Cygnett",
          "category_title": "产品特促",
          "category_color_left": "#30d728",
          "category_color_right": "#31d194",
          "expire_date": "2018-03-30",
          "title": "Cygnett 6,000 mAh ChargeUp Pro USB-C Power Bank - Black",
          "token": "DxiGXqHccv5TRpUKLU2pqpxH",
          "share_url": "http://sniffyapp.com/dd_share?token=DxiGXqHccv5TRpUKLU2pqpxH"
        },
        {
          "id": 2,
          "discount_rate": 0.2,
          "is_favoured": false,
          "branding_id": 5,
          "branding_logo_url": "https://uploads.sniffyapp.com/uploads/branding/logo/5/BCF-Logo.png",
          "branding_name": "BCF",
          "category_title": "产品特促",
          "category_color_left": "#30d728",
          "category_color_right": "#31d194",
          "expire_date": "2018-03-21",
          "title": "12潜水鱿鱼硬身饵 -  170毫米",
          "token": "Y99mzXEyoPQnqK2YuWLyxwdk",
          "share_url": "http://sniffyapp.com/dd_share?token=Y99mzXEyoPQnqK2YuWLyxwdk"
        },
      ]
    };
  }

  _renderItem = (item) => {
    return <ListItem item={item} />
  }

  render() {
    const { navigation, user } = this.props;
    const { data } = this.state;

    return (
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        data={data}
        renderItem={({item}) => this._renderItem(item)}
      />
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
  },
  content: {
    alignItems: 'center',
  }
});
