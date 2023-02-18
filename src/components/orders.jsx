import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { url } from "../slices/api";

const Orders = ({history}) => {

    const {token} = JSON.parse(localStorage.getItem('userInfo'))
    
    // const [orders, setOrders] = useState()

    // useEffect(() => {
    // }, [orders])
    
    const orders = JSON.parse(localStorage.getItem('orderLists'))
    // setOrders(orderss)
    const getOrder = async (id) => {

        // const config = {
        //     headers: {
        //       'x-auth-token': token,
        //       "Content-Type": "application/json",
        //     }
        //   }
        const {data} = await axios.get(`${url}/orders/${id}`)
        localStorage.setItem('order', JSON.stringify(data))
        window.location = `/order/${id}`
        console.log(data)
    }
    // console.log(order)
        // setOrders(orderr)

    // useEffect(() => {
    //     const orderr = JSON.parse(localStorage.getItem('orderList'))
    //     setOrders(orderr)
    // }, [])

    // const [orders, setOrders] = useState('');
    // const {data} = await axios.get(`${url}/orders`)
    //         setOrders(data)
  
    // useEffect(() => {
        
            // const {data} = await axios.get(`${url}/orders`)
            // setOrders(data)
    //     }
    // }, [])
    console.log(orders)
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {!orders ? (
        'Loading'
      ) 
      : (
        <>
          {orders.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
              <Link
                className="btn btn-success mx-2 px-3 py-2"
                to="/"
                style={{
                  fontSize: "12px",
                }}
              >
                START SHOPPING
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      className={`${
                        order.isPaid ? "alert-success" : "alert-danger"
                      }`}
                      key={order._id}
                    >
                      <td>
                        {/* {order.orderItems.map((item) =>  */}
                        {/* <Link to={`/order/${order._id}`} className="link"> */}
            
                        <button onClick={() => {getOrder(order._id)}}>
                        
                            
                                {/* <Link to={`/order/${order._id}`}> */}
                          {order.shippingAddress.address}
                                {/* </Link> */}
                           
                        </button>

                       
                        {/* </Link> */}
                        {/* )} */}
                      </td>
                      <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                      <td>
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </td>
                      <td>&#8358;{order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
