import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Drawer as CustomDrawer, Form, Text, Container, ButtonOpacity,  Header, Table} from '../../../components'
import {
  View
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Feed(){

  const navigation = useNavigation()
  const [reset, setReset] = useState(0)

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

  return (
    <Container> 
      <Header name="Feed" drawer/> 
      <View style={{marginHorizontal: 10, marginVertical: 10,}}>
        <Form listFields={listFields} onSubmit={formHandler} reset={reset} />      
      </View>
      <ButtonOpacity onPress={()=>setReset(reset + 1)} text="reset"/>
      <ButtonOpacity onPress={()=>navigation.navigate('Story')} text="Navigate"/>      
    </Container>
  );
}

function Article(){
  return (
    <Container>
      <Header name="Article" drawer />
      <View>
        <Table 
          data={[
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1,
              total: 20000000
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'B',
              amount: 2000,
              total: 1,
            },
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1000,
              total: 2
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'B',
              amount: 2000,
              total: 1,
            },
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1000,
              total: 2
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'B',
              amount: 2000,
              total: 1,
            },
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1000,
              total: 2
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'B',
              amount: 2000,
              total: 1,
            },
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1000,
              total: 2
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'B',
              amount: 2000,
              total: 1,
            },
            {
              no: 1,
              cnote: 1,
              alamat: 'A',
              amount: 1000,
              total: 2
            },
            {
              no: 2,
              cnote: 2,
              alamat: 'C',
              amount: 2000,
              total: 1,
            },
          ]}
          header={[
            {
              key: 'no',
              value: 'No',
              type: 'number'
            },
            {
              key: 'cnote',
              value: 'CNote',
              type: 'number'
            }, 
            {
              key: 'alamat',
              value: 'Alamat',
              type: 'string',
            },
            {
              key: 'amount',
              value: 'Amount',
              type: 'number',
            },
            {
              key: 'total',
              value: 'Total',
              type: 'number',
            }
          ]}
        />
        {/* <DataTable /> */}
      </View>
    </Container>
  );
}

function Story(){
  return (
    <Container>
      <Header name="Story" />
    </Container>
  );
}

function FeedStack(){
  return(
    <Stack.Navigator initialRouteName="Feed" headerMode="none" >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Story" component={Story} />      
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (    
    <Drawer.Navigator initialRouteName="Feed"
    drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Feed" component={FeedStack} options={{
        swipeEnabled: false,
      }}/>
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>    
  );
}

export default MyDrawer;