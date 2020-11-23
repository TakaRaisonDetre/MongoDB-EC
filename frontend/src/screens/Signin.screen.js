import React, {useEffect, useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {signin} from '../actions/userActions'

import {Link} from 'react-router-dom';


const SigninScreen =(props) =>{

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const redirect = props.location.search? props.location.search.split('=')[1]:'/';

const userSignin = useSelector((state)=> state.userSignin);
const {userInfo} = userSignin;
const dispatch=useDispatch();

 const  submitHandler =(e) =>{
     e.preventDefault();
     dispatch(signin(email, password))
 }

 useEffect(()=>{
     if(userInfo) {
         props.history.push(redirect)
     }
 },[props.history, redirect, userInfo])


  return (
      <div>
       <form className="form" onSubmit={submitHandler}>
         <div>
             <h1> Sign In</h1>
         </div>
         <div>
             <label htmlFor="email">Email address</label>
             <input 
             type="email" 
             id="email" 
             placeholder="Enter Email" 
             required 
             onChange={(e)=>setEmail(e.target.value)}>
             </input>
         </div>
         <div>
             <label htmlFor="password">Password</label>
             <input 
             type="password" 
             id="password" 
             placeholder="Enter password" 
             required 
             onChange={(e)=>setPassword(e.target.value)}>
             </input>
         </div>
         <div>
             <label />
             <button className="primary" type="submit">
                 Sign In
             </button>
             <label />
            <div>
                New Customer ? {''}
                <Link to="/register">Create your account</Link>
            </div>
             
         </div>

       </form>
      </div>
  )


}
export default SigninScreen