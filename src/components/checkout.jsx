import React from 'react'
import  PaystackPop  from '@paystack/inline-js';
import { Link } from 'react-router-dom';
import { url } from './../slices/api';
import  axios  from 'axios';

const Checkout = () => {
    const user = JSON.parse(localStorage.getItem('userDetails'))

    const order = JSON.parse(localStorage.getItem('orderItems'))
    const {orderItems} = order
    const {taxPrice, itemsPrice, shippingPrice, totalPrice} = JSON.parse(localStorage.getItem('orderPrices'))
    
    const payWithPaystack = () => {
        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: "pk_live_0555b377835bff12762dacbc8eda745bae69d126",
          amount: totalPrice * 100,
          email: user.email,
          first_name: user.name,
          orderItems: orderItems,
        //   metadata: { order_id: `${dataOrder._id}` },
          // userId: user.id,
          // itemsPrice,
          // taxPrice,
          // shippingPrice,
          // totalPrice: totalPrice * 100,
    
          onSuccess(transaction) {
            let reference = transaction.reference;
    
            // window.location = await axios.get(
            //   `http://localhost:9000/api/paystack/verify/${reference}`
            // );
    
            // window.location = `${url}/paystack/verify/${reference}`;
            window.location = `${url}/paystack/verify/${reference}/${order._id}`;
          },
          onCancel() {
            alert("Wait! Don't leave :(");
          },
        });
      };

    return ( 
        <div>
      {user ? (
        <h2 className="cart">Order Items for {user.name}</h2>
      ) : (
        <h2 className="cart">Order Items</h2>
      )}
      <div>
        {orderItems.length === 0 && <div>Cart is empty</div>}
        {orderItems.map((item) => (
          <div key={item.id} className="cart">
            <div className="grid-1x2 grid-gap">
              <img src={item.image} width="150px" height="150px" alt="" />
              <div> {item.title} </div>
            </div>
            {/* <div className="action">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div> */}

            <div className="col-2 text-right">
              {item.qty} x &#8358;{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {orderItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="cart bg-white">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">&#8358;{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="cart bg-white">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">&#8358;{taxPrice.toFixed(2)}</div>
            </div>
            <div className="cart bg-white">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                &#8358;{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="cart bg-white">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#8358; {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            {user ? (
              // <div className="cart cart-btn">
              //   <PayButton
              //     cartItems={cartItems}
              //     user={user}
              //     amount={totalPrice}
              //   />
              // </div>
              <button
                type="submit"
                onClick={() => {
                  payWithPaystack()
                }}
              >
                Pay
                {/* <PaystackButton {...componentProps} /> */}
              </button>
            ) : (
              <Link to="/login">
                <button>Login to Check out</button>
              </Link>
            )}
            {/* <button
                onClick={() =>
                  alert("Thanks for visiting our website, Implement Checkout!")
                }
              >
                Checkout
              </button> */}
          </>
        )}
      </div>
    </div>
     );
}
 
export default Checkout;