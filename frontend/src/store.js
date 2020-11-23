
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './reducers/productReducer.js'
import { cartReducer } from './reducers/cartReducer.js';
import { userSigninReducer } from './reducers/userReducer.js';

const initialState = {
   userSignin :{
     userInfo: localStorage.getItem('userInfo')
     ? JSON.parse(localStorage.getItem('userInfo'))
     :
     null,
   },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
  };

// root reducer
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin :userSigninReducer

})

// store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;