import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import registerReducer from './register/registerReducer';
import signReducer from './sign/signReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    sign: signReducer,
    register: registerReducer,
    cart: cartReducer
});

export default rootReducer;