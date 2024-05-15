// import { useState, useEffect } from "react";
// import { ref, onValue, set, remove, update, child } from "firebase/database";
// import { db, auth } from "../firebase";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const AddToCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//         const cartItemsRef = ref(db, `CartItems/${user.uid}`);
//         onValue(cartItemsRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             setCartItems(Object.values(data));
//           } else {
//             setCartItems([]);
//           }
//         });
//       } else {
//         setUser(null);
//         setCartItems([]);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleIncreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.itemId === itemId) {
//         return { ...item, quantity: item.quantity + 1 };
//       } else {
//         return item;
//       }
//     });

//     setCartItems(updatedCartItems);
//   };

//   const handleDecreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.itemId === itemId) {
//         if (item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         } else {
//           return item;
//         }
//       } else {
//         return item;
//       }
//     });

//     setCartItems(updatedCartItems);
//   };

//   const handleRemove = (itemId) => {
//     // Show a confirmation dialog before removing the item
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // If the user confirms, remove the item from the cart
//         const updatedItems = cartItems.filter((item) => item.itemId !== itemId);
//         setCartItems(updatedItems);

//         // Also remove the item from the database
//         const itemRef = ref(db, `CartItems/${auth.currentUser.uid}/${itemId}`);
//         remove(itemRef)
//           .then(() => {
//             // If successful, show a success message
//             Swal.fire(
//               "Removed!",
//               "Your item has been removed from the cart.",
//               "success"
//             );
//           })
//           .catch((error) => {
//             // If there's an error, show an error message
//             Swal.fire({
//               icon: "error",
//               title: "Error",
//               text: "An error occurred while removing the item from the cart. Please try again later.",
//             });
//             console.error("Error removing item from cart:", error);
//           });
//       }
//     });
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <motion.div
//       className="bg-gray-100 min-h-screen pt-20"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-8 xl:px-32">
//         <div className="flex flex-col items-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             My Cart ({cartItems.length})
//           </h2>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="rounded-3xl shadow-lg shadow-gray-400 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
//               >
//                 <div className="col-span-12 lg:col-span-2 img box">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="max-lg:w-full lg:w-[180px] rounded-md"
//                   />
//                 </div>
//                 <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
//                   <div className="flex items-center justify-between w-full mb-4">
//                     <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
//                       {item.name}
//                     </h5>
//                     <button
//                       className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
//                       onClick={() => handleRemove(item.itemId)}
//                     >
//                       <img src="/img/delete.png" alt="" className="h-10" />
//                     </button>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => handleDecreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M4.5 9.5H13.5"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type="text"
//                         id="number"
//                         value={item.quantity}
//                         readOnly
//                         className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1 px-1 bg-gray-100 text-center"
//                       />
//                       <button
//                         onClick={() => handleIncreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M3.75 9.5H14.25M9 14.75V4.25"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                     <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
//                       {`Rs.${item.price * item.quantity}`}
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
//           <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
//             Subtotal
//           </h5>
//           <div className="flex items-center justify-between gap-5">
//             <h6 className="font-manrope font-bold text-3xl lead-10 text-gray-900">{`Rs.${subtotal}`}</h6>
//           </div>
//         </div>

//         <div className="max-lg:max-w-lg max-lg:mx-auto">
//           <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
//             Shipping taxes, and discounts calculated at checkout
//           </p>
//           <Link
//             to={{
//               pathname: "/DeliveryForm",
//               state: { subtotal: subtotal },
//             }}
//           >
//             <button className="rounded-full py-4 px-6 bg-orange-400 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-500 font-david-libre xl:text-2xl">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AddToCart;

// import { useState, useEffect } from "react";
// import { ref, onValue, remove,update  } from "firebase/database";
// import { db, auth } from "../firebase";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const AddToCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const cartItemsRef = ref(db, `CartItems/${user.uid}`);
//         onValue(cartItemsRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             setCartItems(Object.values(data));
//             calculateSubtotal(Object.values(data));
//           } else {
//             setCartItems([]);
//             calculateSubtotal([]);
//           }
//         });
//       } else {
//         setCartItems([]);
//         calculateSubtotal([]);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const calculateSubtotal = (items) => {
//     const total = items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     setSubtotal(total);
//   };

//   // const handleIncreaseQuantity = (itemId) => {
//   //   const updatedCartItems = cartItems.map((item) => {
//   //     if (item.itemId === itemId) {
//   //       return { ...item, quantity: item.quantity + 1 };
//   //     } else {
//   //       return item;
//   //     }
//   //   });

//   //   setCartItems(updatedCartItems);
//   //   calculateSubtotal(updatedCartItems);
//   // };

//   // const handleDecreaseQuantity = (itemId) => {
//   //   const updatedCartItems = cartItems.map((item) => {
//   //     if (item.itemId === itemId) {
//   //       if (item.quantity > 1) {
//   //         return { ...item, quantity: item.quantity - 1 };
//   //       } else {
//   //         return item;
//   //       }
//   //     } else {
//   //       return item;
//   //     }
//   //   });

//   //   setCartItems(updatedCartItems);
//   //   calculateSubtotal(updatedCartItems);
//   // };

//   const handleIncreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.itemId === itemId) {
//         return { ...item, quantity: item.quantity + 1 };
//       } else {
//         return item;
//       }
//     });

//     setCartItems(updatedCartItems);
//     calculateSubtotal(updatedCartItems);

//     // Update the quantity in the database in realtime
//     update(ref(db, `CartItems/${auth.currentUser.uid}`), updatedCartItems);
//   };

//   const handleDecreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.itemId === itemId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       } else {
//         return item;
//       }
//     });

//     setCartItems(updatedCartItems);
//     calculateSubtotal(updatedCartItems);

//     // Update the quantity in the database in realtime
//     update(ref(db, `CartItems/${auth.currentUser.uid}`), updatedCartItems);
//   };

//   const handleRemove = (itemId) => {
//     // Show a confirmation dialog before removing the item
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // If the user confirms, remove the item from the cart
//         const updatedItems = cartItems.filter((item) => item.itemId !== itemId);
//         setCartItems(updatedItems);
//         calculateSubtotal(updatedItems);

//         // Also remove the item from the database
//         const itemRef = ref(db, `CartItems/${auth.currentUser.uid}/${itemId}`);
//         remove(itemRef)
//           .then(() => {
//             // If successful, show a success message
//             Swal.fire(
//               "Removed!",
//               "Your item has been removed from the cart.",
//               "success"
//             );
//           })
//           .catch((error) => {
//             // If there's an error, show an error message
//             Swal.fire({
//               icon: "error",
//               title: "Error",
//               text: "An error occurred while removing the item from the cart. Please try again later.",
//             });
//             console.error("Error removing item from cart:", error);
//           });
//       }
//     });
//   };

//   return (
//     <motion.div
//       className="bg-gray-100 min-h-screen pt-20"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-8 xl:px-32">
//         <div className="flex flex-col items-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             My Cart ({cartItems.length})
//           </h2>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="rounded-3xl shadow-lg shadow-gray-400 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
//               >
//                 <div className="col-span-12 lg:col-span-2 img box">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="max-lg:w-full lg:w-[180px] rounded-md"
//                   />
//                 </div>
//                 <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
//                   <div className="flex items-center justify-between w-full mb-4">
//                     <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
//                       {item.name}
//                     </h5>
//                     <button
//                       className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
//                       onClick={() => handleRemove(item.itemId)}
//                     >
//                       <img src="/img/delete.png" alt="" className="h-10" />
//                     </button>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => handleDecreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M4.5 9.5H13.5"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type="text"
//                         id="number"
//                         value={item.quantity}
//                         readOnly
//                         className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1 px-1 bg-gray-100 text-center"
//                       />
//                       <button
//                         onClick={() => handleIncreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M3.75 9.5H14.25M9 14.75V4.25"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                     <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
//                       {`Rs.${item.price * item.quantity}`}
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
//           <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
//             Subtotal
//           </h5>
//           <div className="flex items-center justify-between gap-5">
//             <h6 className="font-manrope font-bold text-3xl lead-10 text-gray-900">{`Rs.${subtotal}`}</h6>
//           </div>
//         </div>

//         <div className="max-lg:max-w-lg max-lg:mx-auto">
//           <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
//             Shipping taxes, and discounts calculated at checkout
//           </p>
//           <Link to={`/delivery-form/${subtotal}`}>
//             <button className="rounded-full py-4 px-6 bg-orange-400 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-500 font-david-libre xl:text-2xl">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AddToCart;

// import { useState, useEffect } from "react";
// import { ref, onValue, remove,update,set,runTransaction} from "firebase/database";
// import { db, auth } from "../firebase";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const AddToCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const cartItemsRef = ref(db, `CartItems`);
//         onValue(cartItemsRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             setCartItems(Object.values(data));
//             calculateSubtotal(Object.values(data));
//           } else {
//             setCartItems([]);
//             calculateSubtotal([]);
//           }
//         });
//       } else {
//         setCartItems([]);
//         calculateSubtotal([]);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const calculateSubtotal = (items) => {
//     const total = items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );
//     setSubtotal(total);
//   };
//   const handleIncreaseQuantity = (itemId) => {
//     const itemRef = ref(db, `CartItems/${itemId}`);
//     onValue(itemRef, (snapshot) => {
//       const itemData = snapshot.val();
//       if (itemData) {
//         const updatedQuantity = (itemData.quantity || 0) + 1;
//         update(itemRef, { quantity: updatedQuantity });
//       }
//     });
//   };

//   const handleDecreaseQuantity = (itemId) => {
//     const itemRef = ref(db, `CartItems/${itemId}`);
//     onValue(itemRef, (snapshot) => {
//       const itemData = snapshot.val();
//       if (itemData && itemData.quantity > 1) {
//         const updatedQuantity = itemData.quantity - 1;
//         update(itemRef, { quantity: updatedQuantity });
//       }
//     });
//   };
//   const handleRemove = (itemId) => {

//   };

//   return (
//     <motion.div
//       className="bg-gray-100 min-h-screen pt-20"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 py-8 xl:px-32">
//         <div className="flex flex-col items-center">
//           <h2 className="text-2xl font-semibold mb-4">
//             My Cart ({cartItems.length})
//           </h2>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="rounded-3xl shadow-lg shadow-gray-400 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
//               >
//                 <div className="col-span-12 lg:col-span-2 img box">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="max-lg:w-full lg:w-[180px] rounded-md"
//                   />
//                 </div>
//                 <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
//                   <div className="flex items-center justify-between w-full mb-4">
//                     <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
//                       {item.name}
//                     </h5>
//                     <button
//                       className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
//                       onClick={() => handleRemove()}
//                     >
//                       <img src="/img/delete.png" alt="" className="h-10" />
//                     </button>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => handleDecreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M4.5 9.5H13.5"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type="text"
//                         id="number"
//                         value={item.quantity}
//                         readOnly
//                         className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1 px-1 bg-gray-100 text-center"
//                       />
//                       <button
//                         onClick={() => handleIncreaseQuantity(item.itemId)}
//                         className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
//                       >
//                         <svg
//                           className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
//                           width="18"
//                           height="19"
//                           viewBox="0 0 18 19"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M3.75 9.5H14.25M9 14.75V4.25"
//                             stroke=""
//                             strokeWidth="1.6"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                     <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
//                       {`Rs.${item.price * item.quantity}`}
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
//           <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
//             Subtotal
//           </h5>
//           <div className="flex items-center justify-between gap-5">
//             <h6 className="font-manrope font-bold text-3xl lead-10 text-gray-900">{`Rs.${subtotal}`}</h6>
//           </div>
//         </div>

//         <div className="max-lg:max-w-lg max-lg:mx-auto">
//           <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
//             Shipping taxes, and discounts calculated at checkout
//           </p>
//           <Link to={`/delivery-form/${subtotal}`}>
//             <button className="rounded-full py-4 px-6 bg-orange-400 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-500 font-david-libre xl:text-2xl">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AddToCart;

import { useState, useEffect } from "react";
import { ref, onValue, update, remove } from "firebase/database";
import { db, auth } from "../firebase";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    calculateSubtotal(cartItems);
  }, [cartItems]);
  
  useEffect(() => {
    const fetchCartItems = () => {
      // Fetch cart items based on the current user ID
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (userId) {
        const cartItemsRef = ref(db, `CartItems/${userId}`);
        onValue(cartItemsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert object to array and set to state
            const userCartItems = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setCartItems(userCartItems);
          } else {
            setCartItems([]);
          }
        });
      }
    };

    

    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is authenticated, fetch cart items
        fetchCartItems();
      } else {
        // If user is not authenticated, clear cart items
        setCartItems([]);
      }
    });

    return () => {
      // Unsubscribe from the authentication listener when component unmounts
      unsubscribe();
    };
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const handleIncreaseQuantity = (itemId) => {
    const itemRef = ref(db, `CartItems/${auth.currentUser.uid}/${itemId}`);
    onValue(
      itemRef,
      (snapshot) => {
        const itemData = snapshot.val();
        if (itemData) {
          const updatedQuantity = (itemData.quantity || 0) + 1;
          update(itemRef, { quantity: updatedQuantity })
            .then(() => {
              // Update UI state after successfully updating the quantity in the database
              setCartItems((prevCartItems) => {
                return prevCartItems.map((item) => {
                  if (item.itemId === itemId) {
                    return { ...item, quantity: updatedQuantity };
                  }
                  return item;
                });
              });
              calculateSubtotal(cartItems);
            })
            .catch((error) => {
              console.error("Error updating quantity:", error);
            });
        }
      },
      {
        onlyOnce: true, // Fetch the data only once
      }
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    const itemRef = ref(db, `CartItems/${auth.currentUser.uid}/${itemId}`);
    onValue(
      itemRef,
      (snapshot) => {
        const itemData = snapshot.val();
        if (itemData && itemData.quantity > 1) {
          const updatedQuantity = itemData.quantity - 1;
          update(itemRef, { quantity: updatedQuantity })
            .then(() => {
              // Update UI state after successfully updating the quantity in the database
              setCartItems((prevCartItems) => {
                return prevCartItems.map((item) => {
                  if (item.itemId === itemId) {
                    return { ...item, quantity: updatedQuantity };
                  }
                  return item;
                });
              });
              calculateSubtotal(cartItems);
            })
            .catch((error) => {
              console.error("Error updating quantity:", error);
            });
        }
      },
      {
        onlyOnce: true, // Fetch the data only once
      }
    );
  };

  const handleRemove = (cartItem) => {
    // Show a confirmation dialog before removing
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, remove the cart item
        const cartItemRef = ref(db, `CartItems/${auth.currentUser.uid}/${cartItem.id}`);
        remove(cartItemRef)
          .then(() => {
            // If successful, show a success message and update the cart state
            Swal.fire(
              "Removed!",
              "Your cart item has been removed.",
              "success"
            );
            setCartItems((prevCartItems) =>
              prevCartItems.filter((item) => item.id !== cartItem.id)
            );
          })
          .catch((error) => {
            // If there's an error, show an error message
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred while removing the cart item. Please try again later.",
            });
            console.error("Error removing cart item:", error);
          });
      }
    });
  };

  return (
    <motion.div
      className="bg-gray-100 min-h-screen pt-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8 xl:px-32">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            My Cart ({cartItems.length})
          </h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                // {console.log(cartItem.id)}
                className="rounded-3xl shadow-lg shadow-gray-400 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                  {console.log(cartItem.id)}
                <div className="col-span-12 lg:col-span-2 img box">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="max-lg:w-full lg:w-[180px] lg:h-[100px] object-cover rounded-md"
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                      {cartItem.name}
                    </h5>
                    <button
                      className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                      onClick={() => handleRemove(cartItem)}
                    >
                      <img src="/img/delete.png" alt="" className="h-10" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleDecreaseQuantity(cartItem.id)}
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 9.5H13.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="number"
                        value={cartItem.quantity}
                        readOnly
                        className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1 px-1 bg-gray-100 text-center"
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(cartItem.id)}
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 9.5H14.25M9 14.75V4.25"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
                      {`Rs.${cartItem.price * cartItem.quantity}`}
                    </h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5">
            <h6 className="font-manrope font-bold text-3xl lead-10 text-gray-900">{`Rs.${subtotal}`}</h6>
          </div>
        </div>

        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <Link to={`/delivery-form/${subtotal}`}>
            <button className="rounded-full py-4 px-6 bg-orange-400 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-500 font-david-libre xl:text-2xl">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AddToCart;
