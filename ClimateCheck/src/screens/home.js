import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
                    <Button
                    title='Get In'
                    onPress={() => this.props.navigation.navigate('Variables')}
                    />
               
            </View>

        );
    }
}export default HomeScreen;