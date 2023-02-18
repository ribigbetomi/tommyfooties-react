import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import { imagesData } from "./components/imagesData";
import Header from "./components/header";
import NavBar from "./components/navBar";
import TommyBody from "./components/tommyBody";
import MenSlippers from "./components/menSlippers";
import MenLoafers from "./components/menLoafers";
import MenMules from "./components/menMules";
import MenBoots from "./components/menBoots";
import MenMonkstrap from "./components/menMonkstrap";
import MenLaceup from "./components/menLaceup";
import MenShoeSandals from "./components/menShoeSandals";
import ShoeShowcase from "./components/shoeShowcase";
import CartBasket from "./components/cartBasket";
import CartContext from "./context/cartContext";
import RegisterForm from "./components/registerForm";
import SearchShoeList from "./components/searchShoeList";
import SearchShoeListt from "./components/searchShoeListt";
import Categories from "./components/categoriess";
import CheckoutSuccess from "./components/checkoutSuccess";
import auth from "./services/authService";
import LogIn from "./components/login";
import jwtDecode from "jwt-decode";
import Notfound from "./components/notFound";
import CheckoutCancel from "./components/checkoutCancel";
import Checkout from "./components/checkout";
import ShippingScreen from "./components/shippingScreen";
import PaymentScreen from "./components/paymentScreen";
import axios from "axios"
import Orders from "./components/orders";
import Order from "./components/order";
import { url } from "./slices/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [imagesData, setImagesData] = useState([])

  let cart = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  const [searchQueryy, setSearchQueryy] = useState("");
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    async function loadProducts () {
      const {data} = await axios.get(`${url}/products`)
      setImagesData(data)
    }
    loadProducts()
  }, [])

  localStorage.setItem('imagesData', JSON.stringify(imagesData))

  useEffect(() => {
    const user = auth.getCurrentUser();
    setUser(user);
    localStorage.setItem("userDetails", JSON.stringify(user));

  }, []);

  useEffect(() => {
    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleChange = (e) => {
    setSearchQueryy(e.target.value);
  };


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    toast('Item Added to Cart', {
      autoClose: 2000
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  };
  const onRemove = (product) => {
    
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    toast("Item Removed from Cart", {
      autoClose: 2000
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const getOrders = async () => {
    const {data} = await axios.get(`${url}/orders`)
            // setOrders(data)
            console.log(data)
            localStorage.setItem('orderLists', JSON.stringify(data))
            // window.location = '/orders'
  }
  getOrders()

  // const products = JSON.parse(localStorage.getItem('imagesData'))

  return (
    <header className="tommyfooties">
      <ToastContainer/>
      
      <Header countCartItems={cartItems.length} user={user} />
      <NavBar />
      {user && <h2> Welcome {user.name}</h2>}

          {imagesData.length === 0 ? 'Loading' : (
      <Switch>
        <Route
          path="/men-slippers"
          render={(props) => <MenSlippers {...props} data={imagesData} />}
        />
        <Route
          path="/men-boots"
          render={(props) => <MenBoots {...props} data={imagesData} />}
        />
        <Route
          path="/men-monkstrap"
          render={(props) => <MenMonkstrap {...props} data={imagesData} />}
        />
        <Route
          path="/men-laceup"
          render={(props) => <MenLaceup {...props} data={imagesData} />}
        />
        <Route
          path="/men-shoesandals"
          render={(props) => <MenShoeSandals {...props} data={imagesData} />}
        />
        <Route
          path="/men-loafers"
          render={(props) => <MenLoafers {...props} data={imagesData} />}
        />
        <Route
          path="/men-mules"
          render={(props) => <MenMules {...props} data={imagesData} />}
        />
         
        
       
        <Route
          path="/shoe/:productNumber"
          render={(props) => (
            <ShoeShowcase
              {...props}
              imagesData={imagesData}
              onAdd={onAdd}
              cartItems={cartItems}
              // imagesData={imagesData}
            />
          )}
        />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LogIn} />
        <Route
          path="/search-sky"
          render={(props) => (
            <SearchShoeList
              {...props}
              searchQueryy={searchQueryy}
              handleChange={handleChange}
              data={imagesData}
            />
          )}
        />
        <Route path="/search-category" component={SearchShoeListt} />
        <Route
          path="/cart"
          render={(props) => (
            <CartBasket
              {...props}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              user={user}
            />
          )}
        />
        <Route
          path="/checkout"
          component={Checkout}
        />
        <Route
          path="/shipping"
          render={(props) => (
            <ShippingScreen {...props} cartItems={cartItems} />

          )}
        />
        {/* <Route
          path="/payment"
          render={(props) => (
            <PaymentScreen {...props} cartItems={cartItems} />

          )}
        /> */}
        <Route path="/checkout-success/:orderId" render={(props) => (
            <CheckoutSuccess {...props} />
          )} />
          <Route path="/orders" render={(props) => (
            <Orders {...props} />
          )} />
          <Route path='/order/:id' render={(props) => (
            <Order {...props} />
          )}/>
        <Route path="/checkout-cancel" component={CheckoutCancel} />
        <Route path="/shoe-categories" component={Categories} />
        <Route path="/" render={(props) => (
            <TommyBody
              {...props}
              imagesData={imagesData}
             
            />
          )}  />
        <Route path="*" component={Notfound} />
      </Switch>
      )}
    </header>
  );
}

export default App;
