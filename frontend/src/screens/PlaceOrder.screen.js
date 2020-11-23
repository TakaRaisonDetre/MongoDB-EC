import React from 'react'

import {useSelector} from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import {Link} from 'react-router-dom';

const PlaceOrderScreen=(props)=>{

const cart = useSelector(state=> state.cart);
if(!cart.paymentMethod){
    props.history.push('/payment');
}
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
             <div className="col-2">
             <ul>
                 <li>
                     <div className="cart cart-body">
                         <h2>Shipping </h2>
                         <p>
                             <strong>Name: </strong> {cart.shippingAddress.fullName} <br/>
                             <strong>Address:</strong> 
                             {cart.shippingAddress.address},
                             {cart.shippingAddress.city},
                             {cart.shippingAddress.postalCode},
                             {cart.shippingAddress.country}
                         </p>
                     </div>

                 </li>
                 <li>
                     <div className="cart cart-body">
                         <h2>Payment </h2>
                         <p><strong>Method: </strong> {cart.paymentMethod} </p>
                     </div>

                 </li>
                 <li>
                     <div className="cart cart-body">
                         <h2>Order Items </h2>
                        <ul>
                            {cart.cartItems.map((item)=>(
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img src=
                                                {item.image}
                                                alt={item.name}
                                                className="small"></img>
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                           <div>{item.qty}x{item.price}=${item.qty * item.price}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
            </div>

            </li>
             </ul>
             </div>
             <div className="col-1">

             </div>

            </div>

        </div>
    )
}

export default PlaceOrderScreen