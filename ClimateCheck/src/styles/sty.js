import { StyleSheet } from 'react-native'


export  const styles = StyleSheet.create({
container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#2f3640'
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
logo:{
    width: 200,
    height:200
},

title:{
    fontSize: 36,
    marginBottom: 16,
    color: 'white'
},
input:{
    width: 300,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius:25,
    borderColor: 'transparent',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffff',
    marginVertical: 10    
},
buttonText:{
    fontSize: 16,
    fontWeight: '500',
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
}
}
);