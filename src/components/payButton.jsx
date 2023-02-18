import axios from "axios";
// import { useSelector } from "react-redux";
// import url from "../slices/api";
import { url } from "../slices/api";
import { toast } from "react-toastify";

const PayButton = ({ cartItems, user, amount }) => {
  const payload = { amount, userEmail: user.email, userName: user.name };
  const handleCheckout = async () => {
    await axios
      .post(`${url}/paystack/pay`, payload)
      // .post(`${url}/stripe/create-checkout-session`, {
      //   cartItems,
      //   userId: user._id,
      // })
      // .then((res) => {
      //   return res.json();
      // })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));

    // await axios
    //   .post(`${url}/stripe/create-checkout-session`, cartItems)
    //   .then((res) => res.data)
    //   .catch((err) => {
    //     toast.error("Checkout failed");
    //     console.log(err.message);
    //   });
    // if (ses) {
    //   redirectToCheckout({ sessionId: session.id });
    // }
  };

  return (
    <>
      <button onClick={() => handleCheckout()}> CheckOut </button>
    </>
  );
};

export default PayButton;
