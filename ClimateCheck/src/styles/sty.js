import { StyleSheet } from 'react-native'


export  const styles = StyleSheet.create({
container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#2f3640'
    },
temContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#fab1a0'
    },
humContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#74b9ff'
    },
airContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#81ecec'
    },
subContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#dfe6e9'
    },
center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
git:{
    width: 80,
    height: 80
},
refresh:{
    width: 40,
    height: 40
},
logo:{
    width: 200,
    height:200   

},
title:{
    fontSize: 20,
    marginBottom: 16,
    color: 'white'
},
number:{
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
    color: 'white'
},
input:{
    width: 300,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius:25,
    borderColor: 'transparent',
    paddingHorizontal: 60,
    fontSize: 16,
    color: '#2d3436',
    marginVertical: 10    
},
buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffff',
    textAlign: 'center'
},
text:{
    fontSize: 20,
    fontWeight: '400',
    color: '#ffff',
    textAlign: 'center'
},
button:{
    width: 300,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius:25,
    marginVertical: 10,
    paddingVertical: 12
},
inputIcon:{
    position: 'absolute',
    top: 22,
    left: 20
},
inputIcon2:{
    position: 'absolute',
    top: 22,
    left: 260
},

backButton:{
    width: 35,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0)', 
    top: -55,    
    left: -145
},
status:{
    position: 'absolute',
    top: 0,
    left: 125,
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 16,
    color: 'white'
}
}
);