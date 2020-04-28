import React, { Component } from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import {styles} from '../styles/sty';
import { LineChart } from "react-native-chart-kit";

let temp = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20];

	init({
	  size: 10000,
	  storageBackend: AsyncStorage,
	  defaultExpires: 1000 * 3600 * 24,
	  enableCache: true,
	  reconnect: true,
	  sync : {
	  },
  });

  class TemperatureScreen extends Component{  
    constructor(props){
      super(props); 
      const client = new Paho.MQTT.Client("ioticos.org", 8093, 'control1');
      client.onMessageArrived = this.onMessageArrived;
      client.onConnectionLost = this.onConnectionLost;
      
      client.connect({ 
        onSuccess: this.onConnect,
        useSSL: false ,
        userName:   "wKhj0dyPEhaXgT5",  //this.props.userName,
        password:    "VVkfFKYZAzEV7t0",    //this.props.password,
        onFailure: (e) => {console.log("No pasa", e); }
      }
      );
      
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
      client.subscribe("3Rgxx48mXbo1xia/temperature");
      this.setState({isConnected: true, error: ''})
    }

    onMessageArrived = (message) => {
      console.log("Datos:"+message.payloadString );
      console.log("\n");
      this.setState({message: [...this.state.message, message.payloadString]});
      temp[0]=Number(message.payloadString);
      for (let i = temp.length-1; i > 0 ; i--) {
      temp[i] = temp[i-1]; 
     }
      
    }

    componentWillUnmount = () => {
      const { client } = this.state;
      client.disconnect();
      console.log('disconnect')
  }

  render(){
    return(
        <View style={styles.temContainer}>
          <Image style={styles.logo} source={require('../images/temperature.png')}/>
            <Text style={styles.number}> {temp[0]} °C</Text> 
              <LineChart
    data={{
      labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"],
      datasets: [
        {
          data: [
            15,
            temp[1],
            temp[2],
            temp[3],
            temp[4],
            temp[5],
            temp[6],
            temp[7],
            temp[8],
            temp[9]


          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="°C"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fab1a0",
      backgroundGradientTo: "#fab1a0",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
      style: {
        borderRadius: 5
      },
      propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: "#fab1a0"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />      
        </View>
    );

}
  }
  const mapStateToProps = state => ({
    userName: state.userName,
    password: state.password
    })
  export default connect(mapStateToProps,null)(TemperatureScreen);