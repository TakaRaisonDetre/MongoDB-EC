import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import HomeScreen from './screens/Home.screen'
import ProductScreen from './screens/Product.screen'
import CartScreen from './screens/Cart.screen.js';
import SigninScreen from './screens/Signin.screen';
import { signout } from './actions/userActions';

function App() {

  const cart = useSelector((state)=>state.cart);
  const {cartItems} = cart;

  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo} = userSignin;

  const dispatch = useDispatch();
  const singoutHandler =() =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">SVC Shop</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length >0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          {
            userInfo ? (
              <div className="dropdown">
          <Link to="#">
            {userInfo.name}<i className="fa fa-caret-down"></i>{' '}
          </Link> 
          <ul className="dropdown-content">
            <Link to="#signout" onClick={singoutHandler}>Sign Out</Link>
          </ul>
              </div>
          ) : (
          <Link to="/signin">Sign In</Link>
          )}
         
        </div>
      </header>
      <main>
        <Route exact path="/cart/:id?" component={CartScreen}></Route>
        <Route exact path="/product/:id" component={ProductScreen}></Route>
        <Route exact path="/signin" component={SigninScreen}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
        
      </main>
      <footer className="row center">All right reserved @ Nirvana Consultant KK</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
