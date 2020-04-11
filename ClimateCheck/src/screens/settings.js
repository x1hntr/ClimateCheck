import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking, TextInput} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'


import {styles} from '../styles/sty'
import Logo from '../logo/logo.js'

class SettingsScreen extends Component{
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
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faUser} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='UserName'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faLock} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='Password'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        secureTextEntry
        />
        </View>
        
    
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