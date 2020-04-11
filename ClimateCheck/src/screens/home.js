import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
               <Image style={styles.logo} source={require('../images/logo.png')}/>
                <View>
                <Text style={styles.title}>MQTT broker:</Text>
                <Text style={styles.status}>HiveMQTT</Text>
                </View>
                <View>
                <Text style={styles.title}>Username:</Text>
                <Text style={styles.status}>@x1hntr</Text>
                </View>
                <View>
                <Text style={styles.title}>Status:</Text>
                <Text style={styles.status}>Online</Text>
                </View>
                     <TouchableOpacity style={styles.button}
                         onPress={() => this.props.navigation.navigate('Variables')}
                     >
                         <Text style={styles.buttonText}>Get In</Text>
                     </TouchableOpacity>
                    
                </View>

        );
    }
}export default HomeScreen;