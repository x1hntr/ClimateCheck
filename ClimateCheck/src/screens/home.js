import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Variables')}
                     >
                         <Text>Press Here</Text>
                     </TouchableOpacity>
                </View>

        );
    }
}export default HomeScreen;