import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {orderAction} from "../actions/orderAction";
import {useDispatch,useSelector} from 'react-redux'
import Loading from "./Loading"
import Success from "./Success"
import Error from "./Error"

const Checkout = ({amount,hostelId}) => {
    const dispatch = useDispatch();
  //  const date = localStorage.getItem("date") ? JSON.parse(localStorage.getItem("date")) :  null  ;  

   const orderState = useSelector(state => state.placeOrderReducer)
 
    const {error,success,loading} = orderState ;
    
   const  onToken = (token) => {
     
      
        dispatch(orderAction(token,amount,hostelId));
       
  
      }
      
    return (
        <div>
              {loading && <Loading />}
                  {success && <Success success="You  succesfully payment" />}
                  {error && <Error error="somthing is worng" />}
            <StripeCheckout 
             amount={amount*100}
             
             shippingAddress
             billingAddress
             token={onToken}
             stripeKey='pk_test_zKpriPTZuuvkW0Lmv32D4kIW00Hpmdac2h'
             currency="INR"
             >
             <div className="d-grid gap-2 mt-3">
                
                <button className="btn btn-success" type="button">Book Now</button>
             </div>
               
             </StripeCheckout>   
        </div>
    );
};

export default Checkout;