import React, { Component, useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';

	init({
	  size: 10000,
	  storageBackend: AsyncStorage,
	  defaultExpires: 1000 * 3600 * 24,
	  enableCache: true,
	  reconnect: true,
	  sync : {
	  },
  });
  
  let newUser = 'x1hntr';
  let newpassword = '712189';

  export default class App extends Component{
    
    //constructor de mqtt

    constructor(props){
  
      super(props); 
      
      const client = new Paho.MQTT.Client("broker.mqttdashboard.com", 8000, 'control');
      client.onMessageArrived = this.onMessageArrived;
      client.onConnectionLost = this.onConnectionLost;
      client.connect({ 
        onSuccess: this.onConnect,
        useSSL: false ,
        userName: newUser,
        password: newpassword,
        onFailure: (e) => {console.log("No pasa", e); }
        
      });
  
      this.state = { 
        message: [''],
        client,  
        loading: true ,
        showError: false,
         };
    }
    onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log("CONEXION PERDIDA "+responseObject.errorMessage);
        this.setState({error: 'Lost Connection', isConnected: false});
      }
    }
    onConnect = () => {
      const { client } = this.state;
      console.log("Conectado ");
      client.subscribe("ambiente/aire");
      this.setState({isConnected: true, error: ''})
    }
    onMessageArrived = (message) => {
      console.log("Datos:"+message.payloadString );
      console.log("\n");
      this.setState({message: [...this.state.message, message.payloadString]});
    }
    
  render(){
    return(
        <View >
            <Text>{this.state.message}</Text>
            
        </View>
    );
}

  }

