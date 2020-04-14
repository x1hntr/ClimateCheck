import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image, AsyncStorage} from 'react-native'

import {styles} from '../styles/sty'

class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.loadData();
        this.state={
            userName:'',
            broker:''
        }
    }
    render(){
        return(
            <View style={styles.container}>
               <Image style={styles.logo} source={require('../images/logo.png')}/>
                <View>
                <Text style={styles.title}>MQTT broker:</Text>
                <Text style={styles.status}>{this.state.broker} </Text>
                </View>
                <View>
                <Text style={styles.title}>Username:</Text>
                <Text style={styles.status}>{this.state.userName} </Text>
                </View>
                <View>
                <Text style={styles.title}>Status:</Text>
                <Text style={styles.status}>Online</Text>
                </View>
                     <TouchableOpacity style={styles.button}
                         onPress={() => this.props.navigation.navigate('Variables')} >
                         <Text style={styles.buttonText}>Get In</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                        onPress={this.loadData}>
                        <Image style={styles.refresh} source={require('../images/refresh.png')}/>
                     </TouchableOpacity>
                </View>

        );
    }
    loadData = async() => {
        let brok = await AsyncStorage.getItem('broker')
        let usern = await AsyncStorage.getItem('user')
        this.setState({userName:usern});
        this.setState({broker:brok});
      }
}export default HomeScreen;