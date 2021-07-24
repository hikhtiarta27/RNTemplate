import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import _style from './Styles';
import {StatusBar, SnackBar, ButtonOpacity, Loading} from '..';
import {setLoading, setSnackBar} from '../../config/redux/app/AppAction';
import {useDispatch, useSelector} from 'react-redux';

function Container(props) {
  const dispatch = useDispatch();
  const app = useSelector(state => state.app);
  const {children} = props;

  return (
    <View style={_style.container}>
      <StatusBar />
      <SafeAreaView style={{flex: 1}}>
        {children}
        {app.snackBar.show && <SnackBar />}
        <ButtonOpacity
          text="tes"
          onPress={() =>
            dispatch(
              setSnackBar({
                show: true,
                text: 'No Internet Connection',
                type: 'error',
              }),
            )
          }
        />
        <ButtonOpacity text="tes1" onPress={() => dispatch(setLoading(true))} />
        {app.loading && <Loading />}
      </SafeAreaView>
    </View>
  );
}

export default Container;
