import { combineReducers } from 'redux';
import registerReducer from './register/registerReducer';
import signReducer from './sign/signReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    sign: signReducer,
    register: registerReducer
});

export default rootReducer;