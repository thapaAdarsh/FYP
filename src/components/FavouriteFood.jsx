// import React, { useState, useEffect } from "react";
// import { auth, db } from "../firebase"; // Import necessary Firebase modules
// import { ref, get, onValue, remove } from "firebase/database"; // Import ref and get from firebase/database
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const FavouriteFood = () => {
//   const [favoriteFoods, setFavoriteFoods] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     // Fetch favorite foods based on the current user ID
//     const userId = auth.currentUser ? auth.currentUser.uid : null;
//     if (userId) {
//       const favoriteFoodsRef = ref(db, "FavoriteFoods");
//       onValue(favoriteFoodsRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           const userFavoriteFoods = Object.values(data).filter(
//             (item) => item.userId === userId
//           );
//           setFavoriteFoods(userFavoriteFoods);
//         } else {
//           setFavoriteFoods([]);
//         }
//       });
//     }
//   }, []);

//   const handleDeleteFavorite = (foodItem) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Remove the favorite food item from the database
//         const favoriteFoodRef = ref(db, `FavoriteFoods/${foodItem.id}`);
//         remove(favoriteFoodRef)
//           .then(() => {
//             // Handle success message or further actions
//             Swal.fire("Deleted!", "Your favorite food has been deleted.", "success");
//             // Update the local state to remove the deleted item
//             setFavoriteFoods((prevFavoriteFoods) =>
//               prevFavoriteFoods.filter((item) => item.id !== foodItem.id)
//             );
//           })
//           .catch((error) => {
//             // Handle errors
//             console.error("Error removing food item from favorites:", error);
//             Swal.fire({
//               icon: "error",
//               title: "Error",
//               text: "An error occurred while deleting the favorite food. Please try again later.",
//             });
//           });
//       }
//     });
//   };

//   return (
//     <div className="flex justify-center min-h-screen p-4 pt-28 bg-gray-100">
//       <div className="w-full md:max-w-xl lg:max-w-6xl p-8 rounded-lg">
//         <h2 className="text-3xl font-semibold mb-6 text-center font-david-libre lg:text-5xl">
//           Favorite Foods
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {favoriteFoods.map((foodItem) => (
//             <motion.div
//               key={foodItem.id} // Use foodItem.id as the key
//               className="flex flex-col items-center px-4 py-6 rounded-xl overflow-hidden shadow-md bg-white"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <div className="w-full relative">
//                 <img
//                   src={foodItem.image}
//                   alt="Food"
//                   className="w-full object-cover rounded-t-xl h-56"
//                 />
//               </div>
//               <h3 className="text-xl lg:text-2xl font-semibold font-david-libre text-center mt-2">
//                 {foodItem.name}
//               </h3>
//               <button
//                 className="bg-orange-400 text-white py-2 px-3 rounded w-full mt-2 font-semibold font-david-libre bottom-0"
//                 onClick={() => handleDeleteFavorite(foodItem)}
//               >
//                 Delete
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FavouriteFood;

import { useState, useEffect } from "react";
import { auth, db } from "../firebase"; // Import necessary Firebase modules
import { ref, onValue, remove } from "firebase/database"; // Import ref and onValue from firebase/database
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

const FavouriteFood = () => {
  const [favoriteFoods, setFavoriteFoods] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchFavoriteFoods = () => {
      // Fetch favorite foods based on the current user ID
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (userId) {
        const favoriteFoodsRef = ref(db, `FavoriteFoods/${userId}`);
        onValue(favoriteFoodsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert object to array and set to state
            const userFavoriteFoods = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setFavoriteFoods(userFavoriteFoods);
          } else {
            setFavoriteFoods([]);
          }
        });
      }
    };

    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is authenticated, fetch favorite foods
        fetchFavoriteFoods();
      } else {
        // If user is not authenticated, clear favorite foods
        setFavoriteFoods([]);
      }
    });

    return () => {
      // Unsubscribe from the authentication listener when component unmounts
      unsubscribe();
    };
  }, []);

  const handleDeleteFavorite = (foodItem) => {
    // Show a confirmation dialog before deleting
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, delete the favorite food item
        const favoriteFoodRef = ref(
          db,
          `FavoriteFoods/${auth.currentUser.uid}/${foodItem.id}`
        );
        remove(favoriteFoodRef)
          .then(() => {
            // If successful, show a success message and update the favorite foods state
            Swal.fire(
              "Deleted!",
              "Your favorite food has been deleted.",
              "success"
            );
            setFavoriteFoods((prevFavoriteFoods) =>
              prevFavoriteFoods.filter((item) => item.id !== foodItem.id)
            );
          })
          .catch((error) => {
            // If there's an error, show an error message
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "An error occurred while deleting the favorite food. Please try again later.",
            });
            console.error("Error deleting favorite food:", error);
          });
      }
    });
  };

  return (
    <div className="flex justify-center min-h-screen p-4 pt-20 bg-gray-100">
      <div className="w-full md:max-w-xl lg:max-w-6xl p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center font-david-libre lg:text-5xl">
          Favorite Foods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {favoriteFoods.map((foodItem) => (
              <motion.div
                key={foodItem.id} // Use foodItem.id as the key
                className="flex flex-col items-center px-4 py-6 rounded-xl overflow-hidden shadow-md bg-white"
              >
                {console.log(foodItem.id)}
                <div className="w-full relative">
                  <img
                    src={foodItem.image}
                    alt="Food"
                    className="w-full object-cover rounded-t-xl h-56"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold font-david-libre text-center mt-2">
                  {foodItem.name}
                </h3>
                <button
                  className="bg-orange-400 text-white py-2 px-3 rounded w-full mt-2 font-semibold font-david-libre bottom-0"
                  onClick={() => handleDeleteFavorite(foodItem)}
                >
                  Delete
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FavouriteFood;
