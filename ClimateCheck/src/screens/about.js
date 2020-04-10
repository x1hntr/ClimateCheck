import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import {styles} from '../styles/sty'

AboutScreen = () =>
<View style={styles.container}>
<Image style={styles.logo} source={require('../images/logo.png')}/>
        <Text>Hola qui va todo el SettingsScreen</Text>
        <TouchableOpacity
         onPress={() => Linking.openURL('https://github.com/x1hntr')}
         >
        <Image style={styles.git} source={require('../images/github.png')}/>

        </TouchableOpacity>
</View>
export default AboutScreen;