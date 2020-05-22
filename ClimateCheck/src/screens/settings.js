import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux';
import { credentialsSet } from '../actions/loginActions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloud, faUser, faLock, faEye, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {styles} from '../styles/sty'

class SettingsScreen extends Component{
    constructor(){
        super()
        this.state={
          broker:null,
          userName: null,
          password: null
        }
        this.changeName = this.changeName.bind(this);
      }
      changeName(){
        this.props.credentialsSet(this.state.broker, this.state.userName, this.state.password);
      }
      
render(){
    console.log('WELLCOME: ' + this.props.broker);
    console.log('WELLCOME: ' + this.props.userName);
    console.log('PASSWORD: ' + this.props.password);
    return(
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')} >
            <FontAwesomeIcon  icon={faArrowLeft} size={35} color={'#b2bec3'} />
         </TouchableOpacity>

        <Image style={styles.logo} source={require('../images/logo.png')}/>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faCloud} size={21} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='Broker'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        value={this.state.broker}
        onChangeText={(broker) => this.setState({broker})}
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faUser} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='UserName'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        value={this.state.userName}
        onChangeText={(userName) => this.setState({userName})}
        />
        </View>
        <View>
        <FontAwesomeIcon style={styles.inputIcon} icon={faLock} size={20} color={'#b2bec3'} />
        <FontAwesomeIcon style={styles.inputIcon2} icon={faEye} size={20} color={'#b2bec3'} />
        <TextInput style={styles.input}
        placeholder='Password'
        placeholderTextColor='#b2bec3'
        underlineColorAndroid='transparent'
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(password) => this.setState({password})}
        />
        </View>
  
        <TouchableOpacity style={styles.button}
        onPress={(broker, userName, password) => {this.changeName(broker, userName, password)}}>
          <Text style={styles.buttonText}
          >SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={this.displayData}>
          <Text style={styles.buttonText}
          >INFO</Text>
        </TouchableOpacity>        
    </View>

    );
}  
}
mapStateToProps = (state) =>{
  return{
    broker: state.broker,
    userName: state.userName,
    password: state.password
  }
}
export default connect(mapStateToProps, {credentialsSet})(SettingsScreen);