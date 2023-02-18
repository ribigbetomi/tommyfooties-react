import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { url } from './../slices/api';


const CheckoutSuccess = (props) => {
  const orderId = props.match.params.orderId

  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const {orderItems} = JSON.parse(localStorage.getItem('orderItems'))
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'))
  
  useEffect(() => {
    async function updateOrder() {
      const config = {
        headers: {
          "x-auth-token": `${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.put(`${url}/orders/${orderId}`,config)
      localStorage.setItem('cartItems', [])
      toast('Order Placed')
    }
    updateOrder()
  },[orderId])
  
  return (
  <div>
    <h2> Order Id: {orderId} with Order Items: </h2>
    <div>
    {orderItems.map((item) => (
          <div key={item._id} className="cart">
            <div className="grid-1x2 grid-gap">
              <img src={item.image} width="150px" height="150px" alt="" />
              <div> {item.name} </div>
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
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
    </div>
    <div>

    </div>
    </div>
  )
}

export default CheckoutSuccess;
