import React from 'react'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import PropTypes from 'prop-types'
import {
  ViewPropTypes
} from 'react-native'

function Skeleton(props){
  const {children, layout, isLoading} = props
  return(
    <SkeletonContent 
      animationType="shiver"
      animationDirection="horizontalLeft"
      containerStyle={{ flex: 1}}
      isLoading={isLoading}
      layout={layout}
    >   
    {children}   
    </SkeletonContent>
  );
}

Skeleton.propTypes = {
  layout: PropTypes.arrayOf(PropTypes.objectOf(ViewPropTypes.style)),
  isLoading: PropTypes.bool
}

Skeleton.defaultProps = {
  isLoading: false,
}

export default Skeleton