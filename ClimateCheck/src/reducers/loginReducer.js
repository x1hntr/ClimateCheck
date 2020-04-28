const initialState = {
    broker: 'broker@mqtt.com',
    userName: '@user',
    password: 'password'
  }
export default (state = initialState , action) =>{
    
    switch(action.type){
        case 'SAVE':
            return action.payload;
        default:
            return state;
    }

}