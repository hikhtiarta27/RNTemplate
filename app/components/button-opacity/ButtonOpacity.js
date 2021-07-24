import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../text/Text';
import PropTypes from 'prop-types';
import _style from './Styles';
import _s from '../../styles';

function ButtonOpacity(props) {
  const {text, type, style} = props;
  return (
    <TouchableOpacity
      {...props}      
      activeOpacity={0.8}
      style={[_s.btn, 
        type == 'Secondary' ? _s.btnSecondary : 
        type == 'Disable' ? _s.btnDisable : 
        _s.btnPrimary, style]}>
      <Text style={[_style.btnText, _s[`btn${type}Text`]]} value={text} />
    </TouchableOpacity>
  );
}

ButtonOpacity.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

ButtonOpacity.defaultProps = {
  text: '',
  type: 'Primary',
};

export default ButtonOpacity;
