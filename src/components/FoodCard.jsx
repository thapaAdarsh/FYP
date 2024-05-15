// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const FoodCard = ({ foodItems }) => {
//   const [favouriteFoods, setFavouriteFoods] = useState(
//     JSON.parse(localStorage.getItem("favoriteFoods")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("favoriteFoods", JSON.stringify(favouriteFoods));
//   }, [favouriteFoods]);

//   const handleFavouriteClick = (foodItem) => {
//     if (!foodItem) return;
//     const isFavorite = favouriteFoods.some((item) => item.id === foodItem.id);
//     if (!isFavorite) {
//       setFavouriteFoods([...favouriteFoods, foodItem]);
//     } else {
//       const updatedFavouriteFoods = favouriteFoods.filter(
//         (item) => item.id !== foodItem.id
//       );
//       setFavouriteFoods(updatedFavouriteFoods);
//     }
//   };

//   const isFavorite = (foodItem) => {
//     return favouriteFoods.some((item) => item.id === foodItem.id);
//   };

//     // // Pagination state
//     // const [currentPage, setCurrentPage] = useState(1);
//     // const itemsPerPage = 6; // Number of items per page

//     // // Calculate index of the last item on the current page
//     // const indexOfLastItem = currentPage * itemsPerPage;
//     // // Calculate index of the first item on the current page
//     // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     // // Get current items to display on the page
//     // const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div
//       className="bg-gray-100 min-h-screen"
//     >
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {foodItems.map((foodItem) => (
//             <div
//               key={foodItem.id}
//               className="bg-white rounded-lg shadow-lg p-4"
//             >
//               <div className="relative">
//                 <img
//                   src={foodItem.image}
//                   alt={foodItem.foodName}
//                   className="w-full h-56 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-0 left-0 bg-orange-400 text-white font-bold px-2 py-1 rounded-tl-lg">
//                   Rs. {foodItem.price}
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold mt-4 mb-2">
//                   {foodItem.foodName}
//                 </h2>
//                 <div>
//                   <button
//                     className="rounded-full"
//                     onClick={() => handleFavouriteClick(foodItem)}
//                   >
//                     {isFavorite(foodItem) ? (
//                       <img src="/img/black-love.png" alt="" className="h-6" />
//                     ) : (
//                       <img src="/img/hollow_heart.png" alt="" className="h-6" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">{foodItem.description}</p>
//               <div className="flex justify-center">
//                 <Link to={`/FoodDetail/${foodItem.id}`}>
//                   <button className="p-2 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider my-2 px-4 font-david-libre flex items-center text-center">
//                     View Detail ➻
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default FoodCard;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination"; // Import the Pagination component
// // import { motion } from "framer-motion";

// const FoodCard = ({ foodItems }) => {

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6; // Number of items per page

//   // Calculate index of the last item on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   // Calculate index of the first item on the current page
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // Get current items to display on the page
//   const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

//   // Function to handle page change
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {currentItems.map((foodItem) => (
//             <div
//               key={foodItem.id}
//               className="bg-white rounded-lg shadow-lg p-4"
//             >
//               <div className="relative">
//                 <img
//                   src={foodItem.image}
//                   alt={foodItem.foodName}
//                   className="w-full h-56 object-cover rounded-t-lg"
//                 />
//                 <div className="absolute top-0 left-0 bg-orange-400 text-white font-bold px-2 py-1 rounded-tl-lg">
//                   Rs. {foodItem.price}
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold mt-4 mb-2">
//                   {foodItem.foodName}
//                 </h2>
//                 <div>
//                 <p>Average rating:</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-2">{foodItem.description}</p>
//               <div className="flex justify-center">
//                 <Link to={`/FoodDetail/${foodItem.id}`}>
//                   <button className="p-2 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider my-2 px-4 font-david-libre flex items-center text-center">
//                     View Detail ➻
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Pagination component */}
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={foodItems.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default FoodCard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination"; // Import the Pagination component
import { motion } from "framer-motion";
import { ref, get } from "firebase/database";
import { db } from "../firebase";
import RatingValue from "./RatingValue";

const FoodCard = ({ foodItems }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [foodItemsWithReviews, setFoodItemsWithReviews] = useState([]);
  const itemsPerPage = 6; // Number of items per page

  // Calculate index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get current items to display on the page
  const currentItems = foodItemsWithReviews.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Fetch reviews for each food item and calculate the average rating
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Fetch reviews from RateAndReview database
        const reviewsRef = ref(db, "RateAndReview");
        const reviewsSnapshot = await get(reviewsRef);
        const reviewsData = [];
        reviewsSnapshot.forEach((reviewSnapshot) => {
          reviewsData.push(reviewSnapshot.val());
        });

        // Group reviews by foodId
        const reviewsByFoodId = reviewsData.reduce((acc, review) => {
          if (!acc[review.foodId]) {
            acc[review.foodId] = [];
          }
          acc[review.foodId].push(review);
          return acc;
        }, {});

        // Calculate average rating for each food item
        const updatedFoodItems = foodItems.map((foodItem) => {
          const reviews = reviewsByFoodId[foodItem.id] || [];
          const totalRatings = reviews.reduce(
            (sum, review) => sum + review.rating,
            0
          );
          const averageRating =
            reviews.length > 0 ? totalRatings / reviews.length : 0;
          return { ...foodItem, averageRating };
        });

        // Update foodItemsWithReviews state
        setFoodItemsWithReviews(updatedFoodItems);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [foodItems]); // Update whenever foodItems changes

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((foodItem) => (
            <div
              key={foodItem.id}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <div className="relative">
                <img
                  src={foodItem.image}
                  alt={foodItem.foodName}
                  className="w-full h-56 object-cover rounded-t-lg "
                />
                <div className="absolute top-0 left-0 bg-orange-400 text-white font-bold px-2 py-1 rounded-tl-lg">
                  Rs. {foodItem.price}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mt-4 mb-2">
                  {foodItem.foodName}
                </h2>
                <div>
                  {/* <p>Average rating:</p> */}
                  {/* <p>
                    {isNaN(foodItem.averageRating)
                      ? "No reviews"
                      : foodItem.averageRating.toFixed(1)}
                  </p> */}
                  <RatingValue value={foodItem.averageRating} size={20} />
                </div>
              </div>
              <p
                className="text-gray-700 mb-2 text-justify"
                style={{
                  maxHeight: "2.8em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {foodItem.description}
              </p>
              <div className="flex justify-center">
                <Link to={`/FoodDetail/${foodItem.id}`}>
                  <button className="p-2 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider my-2 px-4 font-david-libre flex items-center text-center">
                    View Detail ➻
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination component */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={foodItemsWithReviews.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default FoodCard;
