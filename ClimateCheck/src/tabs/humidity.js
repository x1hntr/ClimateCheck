import React, { Component, cloneElement, setState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

import {styles} from '../styles/sty'

class HumidityScreen extends Component{  
constructor(props){
    super(props);
    this.loadData();
    this.state={ 
        newUser:'',
        newPassword:''
    }
}

render(){
return(
  <View style={styles.container}>  
    <Text style={styles.title}>
        Hola:{this.state.newUser} 
    </Text>
    <Text style={styles.title}>
        Password:{this.state.newPassword}       
    </Text>
  </View>
);
}
loadData = async() => {
  let pss = await AsyncStorage.getItem('pass')
  let usern = await AsyncStorage.getItem('user')
  this.setState({newUser:usern});
  this.setState({newPassword:pss});
}
}export default HumidityScreen;