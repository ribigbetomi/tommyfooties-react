// import React from "react";

// function withOnAdd(Component) {
//   return class WithOnAdd extends React.Component {
//     // const [cartItems, setCartItems] = useState([]);
//     state = { cartItems: [] };
//     onAdd = (product) => {
//       const exist = cartItems.find((x) => x.id === product.id);
//       if (exist) {
//         this.setState({
//           cartItems: [
//             cartItems.map((x) =>
//               x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//             ),
//           ],
//         });
//       } else {
//         this.setState({
//           cartItems: [...cartItems, { ...product, qty: 1 }],
//         });
//       }
//     };
//     onRemove = (product) => {
//       const exist = cartItems.find((x) => x.id === product.id);
//       if (exist.qty === 1) {
//         this.setState({
//           cartItems: [cartItems.filter((x) => x.id !== product.id)],
//         });
//       } else {
//         this.setState({
//           cartItems: [
//             cartItems.map((x) =>
//               x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//             ),
//           ],
//         });
//       }
//     };
//     render() {
//       return (
//         <div>
//           {" "}
//           <Component {...this.props} />{" "}
//         </div>
//       );
//     }
//   };
// }
// export default withOnAdd;
