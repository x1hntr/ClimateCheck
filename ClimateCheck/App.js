import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'

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
          <Button
            onPress={() => props.navigation.openDrawer()}
            title="Info"
            color="black"
          />
        ),
       }}
      />
      <Stack.Screen name="Variables" children={this.createBottomTabs}/>       

    </Stack.Navigator>

  createBottomTabs = () =>{
    return <Tab.Navigator>
      <Tab.Screen name="Temperature" component={AirScreen} />
      <Tab.Screen name="Humidity" component={HumidityScreen} />
      <Tab.Screen name="AirQ" component={AirScreen} />
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