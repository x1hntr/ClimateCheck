import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, Image, AsyncStorage} from 'react-native'

import {styles} from '../styles/sty'

import { connect } from 'react-redux';
import { credentialsSet } from '../actions/loginActions';


class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
    userName: this.props.userName,
      password: this.props.password
        }
    }
    render(){
        return(
            <View style={styles.container}>
               <Image style={styles.logo} source={require('../images/logo.png')}/>
                <View>
                <Text style={styles.title}>MQTT broker:</Text>
                <Text style={styles.status}>{this.props.broker} </Text>
                </View>
                <View>
                <Text style={styles.title}>Username:</Text>
                <Text style={styles.status}>{this.props.userName} </Text>
                </View>
                <View>
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
  
}mapStateToProps = (state) =>{
    return{
      broker: state.broker,
      userName: state.userName,
      password: state.password
    }
  }
  export default connect(mapStateToProps, {credentialsSet})(HomeScreen);