import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {styles} from '../styles/sty'

AboutScreen = () =>
<View style={styles.container}>
<TouchableOpacity style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')} >
            <FontAwesomeIcon  icon={faArrowLeft} size={35} color={'#b2bec3'} />
         </TouchableOpacity>
<Image style={styles.logo} source={require('../images/logo.png')}/>
        <Text style={styles.text} >Climatecheck v1. </Text>
        <Text style={styles.text} >Developed by: Daniel Villavicencio </Text>
        <Text style={styles.text} >2020 </Text>
        <Text style={styles.text} >Github: </Text>



        <TouchableOpacity
         onPress={() => Linking.openURL('https://github.com/x1hntr')}
         >
        <Image style={styles.git} source={require('../images/github.png')}/>

        </TouchableOpacity>
</View>
export default AboutScreen;