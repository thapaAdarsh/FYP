// import { useState, useEffect } from "react";
// import { ref, onValue, set, get, push } from "firebase/database";
// import { db, auth } from "../firebase";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { RatingAndReview } from "./RatingAndReview";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const FoodDetail = () => {
//   const { id } = useParams();
//   const [foodItem, setFoodItem] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [user, setUser] = useState(null);
//   const [favoriteFoods, setFavoriteFoods] = useState([]);

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // ----------------------Rating and Review -----------------

//   useEffect(() => {
//     const foodItemRef = ref(db, `FoodItems/${id}`);
//     onValue(foodItemRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setFoodItem({ ...data, id }); // Ensure each food item has a unique identifier
//       } else {
//         setFoodItem(null);
//       }
//     });
//   }, [id]);

//   useEffect(() => {
//     const reviewsRef = ref(db, `RateAndReview`);
//     onValue(reviewsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const filteredReviews = Object.values(data).filter(
//           (review) => review.foodId === id
//         );
//         setReviews(filteredReviews);
//       } else {
//         setReviews([]);
//       }
//     });
//   }, [id]);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
//   }, []);

//   // -------------------------Add to Cart --------------------

//   // const handleAddToCart = () => {
//   //   // Check if user is authenticated
//   //   if (!user) {
//   //     // Handle case when user is not authenticated
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: "You need to log in to add items to your cart!",
//   //     });
//   //     return;
//   //   }

//   //   // Prepare the data to be added to the cart
//   //   const cartItemData = {
//   //     userId: user.uid,
//   //     itemId: foodItem.id,
//   //     name: foodItem.foodName,
//   //     price: foodItem.price,
//   //     quantity: 1, // Assuming starting quantity is 1
//   //   };

//   //   // Reference to the user's cart items
//   //   const cartItemsRef = ref(db, `CartItems/${user.uid}`);

//   //   // Check if the item is already in the cart for the current user
//   //   get(cartItemsRef)
//   //     .then((snapshot) => {
//   //       const cartItems = snapshot.val();
//   //       if (cartItems) {
//   //         // Check if the item's ID exists in the user's cart items
//   //         const isAlreadyAdded = Object.values(cartItems).some(
//   //           (cartItem) => cartItem.itemId === cartItemData.itemId
//   //         );
//   //         if (isAlreadyAdded) {
//   //           // Show alert that the item is already added to the cart
//   //           Swal.fire({
//   //             icon: "warning",
//   //             title: "Already Added",
//   //             text: `${foodItem.foodName} is already added to your cart!`,
//   //             confirmButtonText: "OK",
//   //           });
//   //         } else {
//   //           // If not added, proceed with adding to cart
//   //           push(cartItemsRef, cartItemData)
//   //             .then(() => {
//   //               // Success message or further actions
//   //               Swal.fire({
//   //                 icon: "success",
//   //                 title: "Added to Cart!",
//   //                 text: `${foodItem.foodName} has been added to your cart!`,
//   //                 confirmButtonText: "OK",
//   //               });
//   //             })
//   //             .catch((error) => {
//   //               // Handle errors
//   //               console.error("Error adding item to cart: ", error);
//   //               // Show error message
//   //               Swal.fire({
//   //                 icon: "error",
//   //                 title: "Error",
//   //                 text: "An error occurred while adding the item to your cart. Please try again later.",
//   //                 confirmButtonText: "OK",
//   //               });
//   //             });
//   //         }
//   //       } else {
//   //         // If there are no items in the cart for the user, create an empty object
//   //         set(cartItemsRef, {});
//   //         // Then add the new item to the cart
//   //         push(cartItemsRef, cartItemData)
//   //           .then(() => {
//   //             // Success message or further actions
//   //             Swal.fire({
//   //               icon: "success",
//   //               title: "Added to Cart!",
//   //               text: `${foodItem.foodName} has been added to your cart!`,
//   //               confirmButtonText: "OK",
//   //             });
//   //           })
//   //           .catch((error) => {
//   //             // Handle errors
//   //             console.error("Error adding item to cart: ", error);
//   //             // Show error message
//   //             Swal.fire({
//   //               icon: "error",
//   //               title: "Error",
//   //               text: "An error occurred while adding the item to your cart. Please try again later.",
//   //               confirmButtonText: "OK",
//   //             });
//   //           });
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       // Handle database read error
//   //       console.error("Error reading cart items: ", error);
//   //       // Show error message
//   //       Swal.fire({
//   //         icon: "error",
//   //         title: "Error",
//   //         text: "An error occurred while checking if the item is already in your cart. Please try again later.",
//   //         confirmButtonText: "OK",
//   //       });
//   //     });
//   // };

//   // ------------------------------------Favourite FOOD-----------------------

//   const handleAddToFavorites = () => {
//     // Check if user is authenticated
//     if (!user) {
//       // Handle case when user is not authenticated
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "You need to log in to add food items to your favorites!",
//       });
//       return;
//     }

//     // Prepare the data to be added to favorites
//     const favoriteFoodData = {
//       userId: user.uid,
//       foodId: foodItem.id,
//       name: foodItem.foodName,
//       image: foodItem.image,
//     };

//     // Reference to the user's favorite foods
//     const favoriteFoodsRef = ref(db, `FavoriteFoods/${user.uid}`);

//     // Check if the food item is already in favorites for the current user
//     get(favoriteFoodsRef)
//       .then((snapshot) => {
//         const favoriteFoods = snapshot.val();
//         if (favoriteFoods) {
//           // Check if the food item's ID exists in the user's favorite foods
//           const isAlreadyAdded = Object.values(favoriteFoods).some(
//             (item) => item.foodId === favoriteFoodData.foodId
//           );
//           if (isAlreadyAdded) {
//             // Show alert that the food item is already added to favorites
//             Swal.fire({
//               icon: "warning",
//               title: "Already Added",
//               text: `${foodItem.foodName} is already added to your favorites!`,
//               confirmButtonText: "OK",
//             });
//           } else {
//             // If not added, proceed with adding to favorites
//             push(ref(db, `FavoriteFoods/${user.uid}`), favoriteFoodData)
//               .then(() => {
//                 // Success message or further actions
//                 Swal.fire({
//                   icon: "success",
//                   title: "Added to Favorites!",
//                   text: `${foodItem.foodName} has been added!`,
//                   confirmButtonText: "OK",
//                 });
//               })
//               .catch((error) => {
//                 // Handle errors
//                 console.error("Error adding food item to favorites: ", error);
//                 // Show error message
//                 Swal.fire({
//                   icon: "error",
//                   title: "Error",
//                   text: "An error occurred while adding the food item to favorites. Please try again later.",
//                   confirmButtonText: "OK",
//                 });
//               });
//           }
//         } else {
//           // If there are no favorite foods for the user, create an empty object
//           set(favoriteFoodsRef, {});
//           // Then add the new favorite food
//           push(ref(db, `FavoriteFoods/${user.uid}`), favoriteFoodData)
//             .then(() => {
//               // Success message or further actions
//               Swal.fire({
//                 icon: "success",
//                 title: "Added to Favorites!",
//                 text: `${foodItem.foodName} has been added!`,
//                 confirmButtonText: "OK",
//               });
//             })
//             .catch((error) => {
//               // Handle errors
//               console.error("Error adding food item to favorites: ", error);
//               // Show error message
//               Swal.fire({
//                 icon: "error",
//                 title: "Error",
//                 text: "An error occurred while adding the food item to favorites. Please try again later.",
//                 confirmButtonText: "OK",
//               });
//             });
//         }
//       })
//       .catch((error) => {
//         // Handle database read error
//         console.error("Error reading favorite foods: ", error);
//         // Show error message
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "An error occurred while checking if the food item is already in favorites. Please try again later.",
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   return (
//     <motion.div
//       className="bg-gray-100 min-h-screen pt-28"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container mx-auto px-4 lg:max-w-4xl xl:max-w-6xl">
//         <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8">
//           <div className="w-full lg:w-1/2">
//             <img
//               src={foodItem.image}
//               alt={foodItem.foodName}
//               className="w-full h-64 object-cover rounded-lg mb-4 lg:h-96 shadow-md"
//             />
//           </div>
//           <div className="w-full lg:w-1/2">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-david-libre lg:text-4xl xl:text-5xl font-bold mb-2">
//                 {foodItem.foodName}
//               </h2>
//               <img
//                 src="/img/black-love.png"
//                 alt=""
//                 className="h-14 shadow-md  shadow-gray-400 rounded-full p-2"
//               />
//             </div>
//             <p className="text-gray-700 mb-2 ">{foodItem.description}</p>
//             <h3 className="text-lg font-bold font-david-libre lg:text-3xl">
//               Ingredients: <br />
//               <span className="font-sans font-light text-xl">
//                 {foodItem.ingredient}
//               </span>
//             </h3>
//             <div className="nutritions">
//               <h4 className="font-david-libre font-semibold text-2xl lg:text-3xl">
//                 Nutrititon's Available in this food
//               </h4>
//               <div className="p-4 text-xl font-thin">
//                 <div className="flex justify-between mb-4">
//                   <li className="">Total Fat: {foodItem.fat} gm</li>
//                   <li className="">Total Protein: {foodItem.protein} gm</li>
//                 </div>
//                 <div className="flex justify-between">
//                   <li className="">Total Carbs: {foodItem.carbs} gm</li>
//                   <li className="">Total Calorie: {foodItem.calorie} gm</li>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <motion.button
//                 className="add-to-cart p-4 hover:bg-orange-500 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider"
//                 onClick={handleAddToCart}
//               >
//                 Add to Cart
//               </motion.button>
//               {/* <Link> */}
//               <motion.button
//                 className="p-4 hover:bg-gray-800 hover:text-white bg-gray-700 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider"
//                 onClick={handleAddToFavorites}
//               >
//                 Add to Favourite
//               </motion.button>
//               {/* </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="max-w-6xl mt-4 mx-auto border-dotted border-t-2 border-gray-500" />
//       <hr className="max-w-6xl mt-1 mx-auto border-t-2 border-gray-500" />
//       <RatingAndReview reviews={reviews} />
//     </motion.div>
//   );
// };

// export default FoodDetail;


import { useState, useEffect } from "react";
import { ref, onValue, set, get, push,child,update } from "firebase/database";
import { db, auth } from "../firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RatingAndReview } from "./RatingAndReview";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const FoodDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const foodItemRef = ref(db, `FoodItems/${id}`);
    onValue(foodItemRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFoodItem({ ...data, id }); // Ensure each food item has a unique identifier
      } else {
        setFoodItem(null);
      }
    });
  }, [id]);

  useEffect(() => {
    const reviewsRef = ref(db, `RateAndReview`);
    onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const filteredReviews = Object.values(data).filter(
          (review) => review.foodId === id
        );
        setReviews(filteredReviews);
      } else {
        setReviews([]);
      }
    });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);


  const handleAddToCart = () => {
    // Check if user is authenticated
    const user = auth.currentUser;
    if (!user) {
      // Handle case when user is not authenticated
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in to add food items to your cart!",
      });
      return;
    }
  
    // Set default quantity to 1 if not provided
    const quantity = foodItem.quantity || 1;
  
    // Prepare the data to be added to the cart
    const cartItemData = {
      userId: user.uid,
      itemId: foodItem.id,
      name: foodItem.foodName,
      image: foodItem.image,
      price: foodItem.price,
      quantity: quantity, // Set default quantity
    };
  
    // Reference to the user's cart
    const cartItemRef = ref(db, `CartItems/${user.uid}`);
  
    // Check if the food item is already in the cart for the current user
    get(cartItemRef)
      .then((snapshot) => {
        const cartItems = snapshot.val();
        if (cartItems) {
          // Check if the food item's ID exists in the user's cart
          const isAlreadyAdded = Object.values(cartItems).some(
            (item) => item.itemId === cartItemData.itemId
          );
          if (isAlreadyAdded) {
            // Show alert that the food item is already added to the cart
            Swal.fire({
              icon: "warning",
              title: "Already Added",
              text: `${foodItem.foodName} is already added to your cart!`,
              confirmButtonText: "OK",
            });
          } else {
            // If not added, proceed with adding to the cart
            push(cartItemRef, cartItemData)
              .then(() => {
                // Success message or further actions
                Swal.fire({
                  icon: "success",
                  title: "Added to Cart!",
                  text: `${foodItem.foodName} has been added to your cart!`,
                  confirmButtonText: "OK",
                });
              })
              .catch((error) => {
                // Handle errors
                console.error("Error adding item to cart: ", error);
                // Show error message
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "An error occurred while adding the item to cart. Please try again later.",
                  confirmButtonText: "OK",
                });
              });
          }
        } else {
          // If there are no items in the cart for the user, add the item directly
          push(cartItemRef, cartItemData)
            .then(() => {
              // Success message or further actions
              Swal.fire({
                icon: "success",
                title: "Added to Cart!",
                text: `${foodItem.foodName} has been added to your cart!`,
                confirmButtonText: "OK",
              });
            })
            .catch((error) => {
              // Handle errors
              console.error("Error adding item to cart: ", error);
              // Show error message
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding the item to cart. Please try again later.",
                confirmButtonText: "OK",
              });
            });
        }
      })
      .catch((error) => {
        // Handle database read error
        console.error("Error reading cart items: ", error);
        // Show error message
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while checking if the food item is already in your cart. Please try again later.",
          confirmButtonText: "OK",
        });
      });
  };

  

  const handleAddToFavorites = () => {
    // Check if user is authenticated
    if (!user) {
      // Handle case when user is not authenticated
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in to add food items to your favorites!",
      });
      return;
    }

    // Prepare the data to be added to favorites
    const favoriteFoodData = {
      userId: user.uid,
      foodId: foodItem.id,
      name: foodItem.foodName,
      image: foodItem.image,
    };

    // Reference to the user's favorite foods
    const favoriteFoodsRef = ref(db, `FavoriteFoods/${user.uid}`);

    // Check if the food item is already in favorites for the current user
    get(favoriteFoodsRef)
      .then((snapshot) => {
        const favoriteFoods = snapshot.val();
        if (favoriteFoods) {
          // Check if the food item's ID exists in the user's favorite foods
          const isAlreadyAdded = Object.values(favoriteFoods).some(
            (item) => item.foodId === favoriteFoodData.foodId
          );
          if (isAlreadyAdded) {
            // Show alert that the food item is already added to favorites
            Swal.fire({
              icon: "warning",
              title: "Already Added",
              text: `${foodItem.foodName} is already added to your favorites!`,
              confirmButtonText: "OK",
            });
          } else {
            // If not added, proceed with adding to favorites
            push(ref(db, `FavoriteFoods/${user.uid}`), favoriteFoodData)
              .then(() => {
                // Success message or further actions
                Swal.fire({
                  icon: "success",
                  title: "Added to Favorites!",
                  text: `${foodItem.foodName} has been added!`,
                  confirmButtonText: "OK",
                });
              })
              .catch((error) => {
                // Handle errors
                console.error("Error adding food item to favorites: ", error);
                // Show error message
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "An error occurred while adding the food item to favorites. Please try again later.",
                  confirmButtonText: "OK",
                });
              });
          }
        } else {
          // If there are no favorite foods for the user, create an empty object
          set(favoriteFoodsRef, {});
          // Then add the new favorite food
          push(ref(db, `FavoriteFoods/${user.uid}`), favoriteFoodData)
            .then(() => {
              // Success message or further actions
              Swal.fire({
                icon: "success",
                title: "Added to Favorites!",
                text: `${foodItem.foodName} has been added!`,
                confirmButtonText: "OK",
              });
            })
            .catch((error) => {
              // Handle errors
              console.error("Error adding food item to favorites: ", error);
              // Show error message
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding the food item to favorites. Please try again later.",
                confirmButtonText: "OK",
              });
            });
        }
      })
      .catch((error) => {
        // Handle database read error
        console.error("Error reading favorite foods: ", error);
        // Show error message
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while checking if the food item is already in favorites. Please try again later.",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <motion.div
    className="bg-gray-100 min-h-screen pt-28"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
  >
    {foodItem && ( // Add a conditional check for foodItem
      <div className="container mx-auto px-4 lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={foodItem.image}
              alt={foodItem.foodName}
              className="w-full h-64 object-cover rounded-lg mb-4 lg:h-96 shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-david-libre lg:text-4xl xl:text-5xl font-bold mb-2">
                {foodItem.foodName}
              </h2>
              <img
                src="/img/black-love.png"
                alt=""
                className="h-14 shadow-md  shadow-gray-400 rounded-full p-2"
              />
            </div>
            <p className="text-gray-700 mb-2 ">{foodItem.description}</p>
            <h3 className="text-lg font-bold font-david-libre lg:text-3xl">
              Ingredients: <br />
              <span className="font-sans font-light text-xl">
                {foodItem.ingredient}
              </span>
            </h3>
            <div className="nutritions">
              <h4 className="font-david-libre font-semibold text-2xl lg:text-3xl">
                Nutrititon's Available in this food
              </h4>
              <div className="p-4 text-xl font-thin">
                <div className="flex justify-between mb-4">
                  <li className="">Total Fat: {foodItem.fat} gm</li>
                  <li className="">Total Protein: {foodItem.protein} gm</li>
                </div>
                <div className="flex justify-between">
                  <li className="">Total Carbs: {foodItem.carbs} gm</li>
                  <li className="">Total Calorie: {foodItem.calorie} gm</li>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <motion.button
                className="add-to-cart p-4 hover:bg-orange-500 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider"
                onClick={handleAddToCart}
              >
                Add to Cart
              </motion.button>
              <motion.button
                className="p-4 hover:bg-gray-800 hover:text-white bg-gray-700 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider"
                onClick={handleAddToFavorites}
              >
                Add to Favourite
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    )}
    <hr className="max-w-6xl mt-4 mx-auto border-dotted border-t-2 border-gray-500" />
    <hr className="max-w-6xl mt-1 mx-auto border-t-2 border-gray-500" />
    <RatingAndReview reviews={reviews} />
  </motion.div>
  );
};

export default FoodDetail;
