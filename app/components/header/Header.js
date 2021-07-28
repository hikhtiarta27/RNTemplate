import React from 'react';
import {View, TouchableOpacity, Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import _style from './Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OctoIcon from 'react-native-vector-icons/Octicons';
import _c from '../../styles/Color';
import _t from '../../styles/Typography';
import _s from '../../styles';
import Text from '../text/Text';
import {iconSizeAndroid, iconSizeIos} from '../../config/Variables'
import { DrawerActions, useNavigation } from '@react-navigation/native';

function Header(props) {
  const navigation = useNavigation()    
  const {backHandler, name, drawer} = props;  
  return (
    <View style={[_style.headerContainer, !navigation.canGoBack() && !drawer && _s.pl10]}>
      {backHandler != undefined || backHandler != null? (
        <TouchableOpacity style={_style.backBtn} onPress={backHandler}>
          <AntDesignIcon name={Platform.OS == 'ios' ? "left" : "arrowleft"} size={Platform.OS == 'ios' ? iconSizeIos : iconSizeAndroid} color={_c.black} />
        </TouchableOpacity>
      ) : null}
      {drawer ? (
        <TouchableOpacity style={_style.backBtn} onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
          <OctoIcon name="three-bars" size={Platform.OS == 'ios' ? iconSizeIos : iconSizeAndroid} color={_c.black} />          
        </TouchableOpacity>
      ) : null}
      <Text type="h5" style={[Platform.OS == 'ios' ? _style.nameStyleIos : _s.textLeft, _t.headerText]} value={name} />        
    </View>
  );
}

Header.propTypes = {
  backHandler: PropTypes.func,
  drawer: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: '',
  drawer: false,
};

export default Header;
