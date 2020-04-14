import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking, TextInput, AsyncStorage} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'


import {styles} from '../styles/sty'


let user;
let pass;

class SettingsScreen extends Component{
    constructor(){
        super()
        this.state={
          broker:'',
          userName:'',
          password:''
        }
      }
      ChangeBroker(broker){
        this.setState({broker})
      }
      ChangeName(userName){
        this.setState({userName})
      }
      ChangePassword(password){
        this.setState({password})
      }
      saveData(userName, password){
        AsyncStorage.setItem('broker', this.state.broker)
        AsyncStorage.setItem('user', this.state.userName)
        AsyncStorage.setItem('pass', this.state.password)
    
      }
      displayData = async () => {
        try{
                alert(await AsyncStorage.getItem('broker') + '\n' + 
                      await AsyncStorage.getItem('user') + '\n' +
                      await AsyncStorage.getItem('pass'));
        }
       catch(error){
         alert(error);
       } 
      }
      buttonPressed(){
        if(this.state.userName && this.state.password)
        alert(this.state.userName+ ''+ this.state.password);
      }
      resetData() {
        try {
        AsyncStorage.removeItem('broker');
        AsyncStorage.removeItem('pass');
        AsyncStorage.removeItem('user');
    
          } catch (error) {
          console.log("Error resetting data" + error);
        }
      }
render(){
    return(
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faCloud} size={21} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='Broker'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        value={this.state.broker}
        onChangeText={(broker) => this.ChangeBroker(broker)}
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faUser} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='UserName'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        value={this.state.userName}
        onChangeText={(userName) => this.ChangeName(userName)}
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faLock} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='Password'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        secureTextEntry
        value={this.state.password}
        onChangeText={(password) => this.ChangePassword(password)}
        />
        </View>
    
        <TouchableOpacity style={styles.button}
        onPress={() => this.saveData()}  
        >
          <Text style={styles.buttonText}
          >SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={this.displayData}>
          <Text style={styles.buttonText}
          >INFO</Text>
        </TouchableOpacity>        
    </View>

    );
}  
}
export default SettingsScreen;