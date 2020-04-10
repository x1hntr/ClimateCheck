import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'

import HomeScreen from './src/screens/home'
import SettingsScreen from './src/screens/settings'
import AboutScreen from './src/screens/about'
import StatisticsScreen from './src/screens/statistics'

import AirScreen from './src/tabs/air'
import TemperatureScreen from './src/tabs/temperature'
import HumidityScreen from './src/tabs/humidity'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


class App extends Component{

  createHomeStack = (props) =>
    <Stack.Navigator>
      <Stack.Screen name="ClimateCheck" component={HomeScreen}
      options={{ 
        headerLeft: () => (
          <TouchableOpacity
         onPress={() => props.navigation.openDrawer()}
         >
        <FontAwesomeIcon icon={ faBars } size={25} color={'#2d3436'}/>

        </TouchableOpacity>
        ),
       }}
      />
      <Stack.Screen name="Variables" children={this.createBottomTabs}/>       

    </Stack.Navigator>

  createBottomTabs = () =>{
    return <Tab.Navigator>
      <Tab.Screen name="Temperature" component={TemperatureScreen}
      options={{
        title: "Temperature",
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faTemperatureHigh} size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="Humidity" component={HumidityScreen} 
      options={{
        title: "Humidity",
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faTint} size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="AirQ" component={AirScreen}
      options={{
        title: "AirQ",
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faWind} size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  }
  createDrawerOptions= ()=>{
    return(
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" children={this.createHomeStack} />
        <Drawer.Screen name="Statistics" component={StatisticsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    );
    
  }

  render(){
    return(
      <NavigationContainer>
      <this.createDrawerOptions/>
    </NavigationContainer>
    );
  }
} export default App;