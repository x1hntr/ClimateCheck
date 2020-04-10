import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
               <Image style={styles.logo} source={require('../images/logo.png')}/>

                <Text style={styles.title}>MQTT broker:</Text>
                <Text style={styles.title}>UserName:</Text>
                <Text style={styles.title}>Status:</Text>
                     <TouchableOpacity style={styles.button}
                         onPress={() => this.props.navigation.navigate('Variables')}
                     >
                         <Text style={styles.buttonText}>Get In</Text>
                     </TouchableOpacity>
                    
                </View>

        );
    }
}export default HomeScreen;