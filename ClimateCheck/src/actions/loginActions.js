export const credentialsSet = (mqtt, user, pass) =>{
    return{
        type: 'SAVE',
        payload: {broker: mqtt, userName: user, password: pass}
    };
}