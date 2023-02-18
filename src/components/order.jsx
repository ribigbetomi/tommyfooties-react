import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  moment from 'moment';

const Order = ({match}) => {
    const {id} = match.params
    // console.log(id)
    
    const [order, setOrder] = useState('')

    useEffect(() => {
        const orderr = JSON.parse(localStorage.getItem('order'))
        setOrder(orderr)
    }, [])
    
    console.log(order)
    
    // useEffect(() => {

    //     async function loadOrders() {
    //         const config = {
    //         headers:{
    //             'x-auth-token': `${userInfo.token}`,
    //             "Content-Type": "application/json",
    //         }
    //     }
    //         const {data} = await axios.get(`http://localhost:9000/api/orders/${id}`, config);
    //         // console.log(data);
    //         setOrderr(data)
            
    //     }
    //     loadOrders()
    // }, [])
    // localStorage.setItem('orderr', JSON.stringify(orderr))
    // const order = JSON.parse(localStorage.getItem('orderr'))
        
    // useEffect (() => {
    //     // const config = {
    //     //     headers:{
    //     //         'x-auth-token': `${userInfo.token}`,
    //     //         "Content-Type": "application/json",
    //     //     }
    //     // }
    //     async function orderFunc() {
    //         const data = await axios.get(`http://localhost:9000/api/orders/${id}`);
    //         setOrder(data)
    //     }
    //     orderFunc()
    // }, [id])
    
    // const orderr = async () => {
        //     const {data} = await axios.get(`http://localhost:9000/api/orders/${id}`, config);
    //     setOrder(data)
    // }
    // orderr()
    
    // console.log(order)
    
    const user = JSON.parse(localStorage.getItem('userDetails'))
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    return ( 
        <div>

        {
            !order ? ('Loading') : (
                <div className='spaceee'>
                  <div className="row  order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row">
                        <div className="col-md-4 center">
                          <div className="alert-success order-box">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="col-md-8 center">
                          <h5>
                            <strong>Customer</strong>
                          </h5>
                          <p>{user.name} </p>
                          <p>
                            <a href={`mailto:${user.email}`}>
                              {user.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 2 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row">
                        <div className="col-md-4 center">
                          <div className="alert-success order-box">
                            <i className="fas fa-truck-moving"></i>
                          </div>
                        </div>
                        <div className="col-md-8 center">
                          <h5>
                            <strong>Order info</strong>
                          </h5>
                          <p>Shipping: {order.shippingAddress.country} </p>
                          {/* <p>Pay method: {order.paymentMethod} </p> */}
                          {order.isPaid ? (
                            <div className="bg-info p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Paid: {moment(order.paidAt).calendar()}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-danger p-2 col-12">
                              <p className="text-white text-center text-sm-start">
                                Not Paid
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                      <div className="row">
                        <div className="col-md-4 center">
                          <div className="alert-success order-box">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                        </div>
                        <div className="col-md-8 center">
                          <h5>
                            <strong>Deliver to</strong>
                          </h5>
                          <p>
                            Address: {order.shippingAddress.city},{" "}
                            {order.shippingAddress.address},{" "}
                          </p>
                          <>
                            {order.isDelivered ? (
                              <div className="bg-info p-2 col-12">
                                <p className="text-white text-center text-sm-start">
                                  Delivered on {(moment(order.deliveredAt).calender())}
                                </p>
                              </div>
                            ) : (
                              <div className="bg-danger p-2 col-12">
                                <p className="text-white text-center text-sm-start">
                                  Not Delivered
                                </p>
                              </div>
                            )}
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                      {order.orderItems.length === 0 ? (
                        <div>
                          Your order is empty
                        </div>
                      ) : (
                        <>
                          {order.orderItems.map((item, index) => (
                            <div className="order-product row" key={index}>
                              <div className="col-md-3 col-6">
                                <img src={item.image} alt={item.name} style={{width:'7rem', height:'7rem'}}/>
                              </div>
                              <div className="col-md-5 col-6 d-flex align-items-center">
                                <Link to={`/shoe/${item.productNumber}`}>
                                  <h6>{item.name}</h6>
                                </Link>
                              </div>
                              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                <h4>QUANTITY</h4>
                                <h6>{item.qty} </h6>
                              </div>
                              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                                <h4>SUBTOTAL</h4>
                                <h6>${item.qty * item.price}</h6>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    {/* total */}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                      <table className="table table-bordered">
                        <tbody>
                          {/* <tr>
                            <td>
                              <strong>Products</strong>
                            </td>
                            <td>${order.itemsPrice} </td>
                          </tr> */}
                          <tr>
                            <td>
                              <strong>Shipping</strong>
                            </td>
                            <td>${order.shippingPrice} </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Tax</strong>
                            </td>
                            <td>${order.taxPrice} </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Total</strong>
                            </td>
                            <td>${order.totalPrice} </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* {order.orderItems.length === 0 ? null : (
                        <button type="submit" onClick={""}>
                          PLACE ORDER
                        </button>
                      )} */}
      
                      {/* {!order.isPaid && (
                        <div className="col-12">
                          {loadingPay && <Loading />}
                          {!sdkReady ? (
                            <Loading />
                          ) : (
                            <PayPalButton
                              amount={order.totalPrice}
                              onSuccess={successPaymentHandler}
                            />
                          )}
                        </div>
                      )} */}
                      {/* {error && (
                        <div className="my-3 col-12">
                          <Message variant="alert-danger">{error}</Message>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
                
            )
        }
        </div>
     );
}
 
export default Order;