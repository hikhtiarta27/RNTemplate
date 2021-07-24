import React from 'react';
import {View, TouchableOpacity, Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import _style from './Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import _c from '../../styles/Color';
import _t from '../../styles/Typography';
import _s from '../../styles';
import Text from '../text/Text';
import {iconSizeAndroid, iconSizeIos} from '../../config/Variables'

function Header(props) {
  const {backHandler, name} = props;  
  return (
    <View style={[_style.headerContainer, backHandler == null && _s.mx10]}>
      {backHandler != undefined || backHandler != null ? (
        <TouchableOpacity style={_style.backBtn} onPress={backHandler}>
          <AntDesignIcon name="arrowleft" size={Platform.OS == 'ios' ? iconSizeIos : iconSizeAndroid} color={_c.black} />
        </TouchableOpacity>
      ) : null}
      <Text type="h5" style={[Platform.OS == 'ios' ? _style.nameStyleIos : _s.textLeft, _t.headerText]} value={name} />        
    </View>
  );
}

Header.propTypes = {
  backHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: '',
};

export default Header;
