// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import FavouriteFood from "./FavouriteFood";

// // const FoodCard = ({ foodItems }) => {

// //   const [favouriteFoods, setFavouriteFoods] = useState(JSON.parse(localStorage.getItem('favoriteFoods')) || [])
// //   const [heartSrc, setHeartSrc] = useState('/img/hollow_heart.png');

// //   useEffect(() => {
// //     localStorage.setItem("favoriteFoods", JSON.stringify(favouriteFoods));
// //     }, [favouriteFoods]);

// //   const handleFavouriteClick = (foodItem) =>{
// //     if (!foodItem) return;
// //     const updatedFavouriteFoods = [...favouriteFoods];
// //     const index = updatedFavouriteFoods.findIndex((item)=>item.id ===foodItem.id)

// //     if(index === -1){
// //       updatedFavouriteFoods.push(foodItem);

// //     }else{
// //       updatedFavouriteFoods.splice(index,1);
// //     }
// //     setFavouriteFoods(updatedFavouriteFoods);
// //   }

// //   const handleClick = () => {
// //     // Check the current src and toggle it to another src
// //     if (heartSrc === '/img/hollow_heart.png') {
// //       setHeartSrc('/img/black-love.png');
// //     } else {
// //       setHeartSrc('/img/hollow_heart.png');
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //           {foodItems.map((foodItem) => (
// //             <div
// //               key={foodItem.id}
// //               className="bg-white rounded-lg shadow-lg p-4"
// //             >
// //               <div className="relative">
// //                 <img
// //                   src={foodItem.image}
// //                   alt={foodItem.foodName}
// //                   className="w-full h-56 object-cover rounded-t-lg"
// //                 />
// //                 <div className="absolute top-0 left-0 bg-orange-400 text-white font-bold px-2 py-1 rounded-tl-lg">
// //                   Rs. {foodItem.price}
// //                 </div>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <h2 className="text-xl font-bold mt-4 mb-2">
// //                   {foodItem.foodName}
// //                 </h2>
// //                 <div>
// //                     <button className="rounded-full p-1" onClick={()=>handleFavouriteClick(foodItem)}>
// //                       <img
// //                         src={heartSrc}
// //                         alt=""
// //                         className="h-6"
// //                         onClick={handleClick}
// //                       />
// //                     </button>
// //                 </div>
// //               </div>
// //               <p className="text-gray-700 mb-2">{foodItem.description}</p>
// //               <div className="flex justify-center">
// //                 <Link to={`/FoodDetail/${foodItem.id}`}>
// //                   <button className="p-2 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider my-2 px-4 font-david-libre flex items-center text-center">
// //                     View Detail ➻
// //                   </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FoodCard;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

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

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {foodItems.map((foodItem) => (
//             <div key={foodItem.id} className="bg-white rounded-lg shadow-lg p-4">
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
//                       <img
//                         src="/img/black-love.png"
//                         alt=""
//                         className="h-6"
//                       />
//                     ) : (
//                       <img
//                         src="/img/hollow_heart.png"
//                         alt=""
//                         className="h-6"
//                       />
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoodCard = ({ foodItems }) => {
  const [favouriteFoods, setFavouriteFoods] = useState(
    JSON.parse(localStorage.getItem("favoriteFoods")) || []
  );

  useEffect(() => {
    localStorage.setItem("favoriteFoods", JSON.stringify(favouriteFoods));
  }, [favouriteFoods]);

  const handleFavouriteClick = (foodItem) => {
    if (!foodItem) return;
    const isFavorite = favouriteFoods.some((item) => item.id === foodItem.id);
    if (!isFavorite) {
      setFavouriteFoods([...favouriteFoods, foodItem]);
    } else {
      const updatedFavouriteFoods = favouriteFoods.filter(
        (item) => item.id !== foodItem.id
      );
      setFavouriteFoods(updatedFavouriteFoods);
    }
  };

  const isFavorite = (foodItem) => {
    return favouriteFoods.some((item) => item.id === foodItem.id);
  };

  return (
    <div
      className="bg-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((foodItem) => (
            <div
              key={foodItem.id}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <div className="relative">
                <img
                  src={foodItem.image}
                  alt={foodItem.foodName}
                  className="w-full h-56 object-cover rounded-t-lg"
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
                  <button
                    className="rounded-full"
                    onClick={() => handleFavouriteClick(foodItem)}
                  >
                    {isFavorite(foodItem) ? (
                      <img src="/img/black-love.png" alt="" className="h-6" />
                    ) : (
                      <img src="/img/hollow_heart.png" alt="" className="h-6" />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{foodItem.description}</p>
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
    </div>
  );
};

export default FoodCard;
