import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import _style from './Styles';
import _typography from '../../styles/Typography'

function MyText(props) {
  const {style, value, type, numberOfLines} = props;  
  return <Text {...props} numberOfLines={numberOfLines} ellipsizeMode="tail" style={[_style.textStyle,
    type == 'h1' ? _typography.h1 : 
    type == 'h2' ? _typography.h2 : 
    type == 'h3' ? _typography.h3 : 
    type == 'h4' ? _typography.h4 :    
    _typography.bodyText, style,
  ]}>{value}</Text>;
}

MyText.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number
};

MyText.defaultProps = {
  type: 'h5',
  style: {}
}

export default MyText;
