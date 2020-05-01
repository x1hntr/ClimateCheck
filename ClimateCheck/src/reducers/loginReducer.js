const initialState = {
    broker: 'wKhj0dyPEhaXgT5',
    userName: 'wKhj0dyPEhaXgT5',
    password: 'VVkfFKYZAzEV7t0'
  }
export default (state = initialState , action) =>{
    
    switch(action.type){
        case 'SAVE':
            return action.payload;
        default:
            return state;
    }

}