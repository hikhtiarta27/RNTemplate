import React from 'react'
import {Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import _style from './Styles';

function ErrorText(props){
  return(
    <Text style={_style.errorText}>{props.text}</Text>
  );
}

ErrorText.propTypes = {
  text: PropTypes.string
}

export default ErrorText;