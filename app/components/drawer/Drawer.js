import React, {useState} from 'react';
import {Platform, SafeAreaView, View} from 'react-native';
import _style from './Styles';
import _s from '../../styles';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Text from '../text/Text';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {iconSizeIos, iconSizeAndroid} from '../../config/Variables';

const drawerlist = [
  {
    label: 'Feed',
    component: 'Feed',
    icon: 'Trophy',
  },
  {
    label: 'Article',
    component: 'Article',
    icon: 'folder1',
  },
];

function Drawer(props) {
  const {navigation} = props;
  const [currentDrawer, setCurrentDrawer] = useState(drawerlist[0].label);

  const drawerHandler = item => {
    navigation.navigate(item.component);
    setCurrentDrawer(item.label);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={_s.flex1}>
      <SafeAreaView style={_s.flex1}>
        {drawerlist.map((item, index) => (
          <DrawerItem
            icon={({focused}) => (
              <AntDesignIcon
                name={item.icon}
                size={Platform.OS == 'ios' ? iconSizeIos : iconSizeAndroid}
                style={focused ? _style.iconActive : _style.icon}                
              />
            )}
            focused={item.label == currentDrawer}
            key={index}
            label={({focused, color}) => (
              <Text
                style={focused ? _style.labelActive : _style.label}
                value={item.label}
              />
            )}
            onPress={() => drawerHandler(item)}
            style={_style.drawerItem}
          />
        ))}
        <View style={_s.flexJustifyEnd}>
          <DrawerItem
            label="Logout"
            style={_style.drawerItemLogout}
            labelStyle={_style.labelLogout}
          />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

export default Drawer;
