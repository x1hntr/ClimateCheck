import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Variables')}
                     >
                         <Text>GetIn</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     >
                         <Text>Drawer</Text>
                     </TouchableOpacity>
                </View>

        );
    }
}export default HomeScreen;