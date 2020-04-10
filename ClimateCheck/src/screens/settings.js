import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native'

import {styles} from '../styles/sty'
import Logo from '../logo/logo.js'

class SettingsScreen extends Component{
render(){
    return(
    <View style={styles.container}>
        <TouchableOpacity
         onPress={() => Linking.openURL('https://github.com/x1hntr')}
         >
        <Image source={require('../images/github.png')}/>

        </TouchableOpacity>
        
    </View>

    );
}  
}
export default SettingsScreen;