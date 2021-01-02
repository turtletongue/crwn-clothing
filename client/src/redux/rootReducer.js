import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import registerReducer from './register/registerReducer';
import signReducer from './sign/signReducer';
import userReducer from './user/userReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';
import alertReducer from './alert/alertReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};


const rootReducer = combineReducers({
    user: userReducer,
    sign: signReducer,
    register: registerReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    alert: alertReducer
});

export default persistReducer(persistConfig, rootReducer);