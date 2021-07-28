import React from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import _style from './Styles';
import _s from '../../styles';
import _c from '../../styles/Color';

function ButtonHighlight({text, type, children, ...props}) {  
  return (
    <TouchableHighlight {...props} underlayColor={_c.grayEEE}>
      {children}
    </TouchableHighlight>
  );
}

ButtonHighlight.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.string,
};

ButtonHighlight.defaultProps = {
  type: 'Primary',
};

export default ButtonHighlight;
