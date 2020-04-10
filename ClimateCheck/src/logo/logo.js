import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class Logo extends Component{
render(){
    return(
        <View>
            <Image style={{width:40, height:60}} source={require('../images/logo.png')}/>
        </View>
    );
}
} export default Logo;