import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking, TextInput} from 'react-native'

import {styles} from '../styles/sty'
import Logo from '../logo/logo.js'

class SettingsScreen extends Component{
render(){
    return(
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
        <TextInput style={styles.input}
        placeholder='Broker'
        placeholderTextColor='#2d3436'
        underlineColorAndroid='transparent'
        />
        <TextInput style={styles.input}
        placeholder='Username'
        underlineColorAndroid='transparent'
        />
        <TextInput style={styles.input}
        placeholder='Password'
        underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.button}
         onPress={() => {}}
         >
             <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        
    </View>

    );
}  
}
export default SettingsScreen;