import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Drawer as CustomDrawer, Form, Text, Container, ButtonOpacity} from '../../../components'
import {
  View
} from 'react-native'

const Drawer = createDrawerNavigator();

function Feed(){

  const formHandler = (value) =>{
    console.log(value)
  }

  const listFields = [
    {
      name: 'Phone Number',
      key: 'phone',
      type: 'phone',
      required: true,      
    },
    {
      name: 'Email',
      key: 'email',
      type: 'email',
      required: true,            
    },
    {
      name: 'Nama',
      key: 'name',
      type: 'alphabet',
      required: true,            
    },
    {
      name: 'Password',
      key: 'password',
      type: 'string',
      required: true, 
      secureText: true,           
    }
  ]

  return (<Container>    
    <View style={{marginHorizontal: 10, marginVertical: 10,}}>
      <Form listFields={listFields} onSubmit={formHandler}/>      
    </View>
  </Container>);
}

function Article(){
  return null;
}

function MyDrawer() {
  return (    
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>    
  );
}

export default MyDrawer;