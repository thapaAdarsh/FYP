// import { useState, useEffect } from "react";
// import { ref, onValue } from "firebase/database";
// import { db } from "../firebase";
// import { Link } from "react-router-dom";

// const NutritionCard = () => {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     const foodItemRef = ref(db, "FoodItems");
//     onValue(foodItemRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const foodItemsArray = Object.entries(data).map(([key, value]) => ({
//           id: key,
//           ...value,
//         }));
//         setFoodItems(foodItemsArray);
//       } else {
//         setFoodItems([]);
//       }
//     });
//   }, []);



//     return (
//       <div className="flex flex-wrap overflow-x-auto">
//         {foodItems.map((foodItem) => (
//           // <Link to='/NutritionCalculator'>
//           <div key={foodItem.id} className="w-1/4 md:w-1/3 lg:w-1/4 p-4 ">
//             <Link to={`/NutritionCalculator/${foodItem.id}`}>
//             <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden ursor-pointer">
//               <img src={foodItem.image} alt={foodItem.foodName} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h5 className="text-center">{foodItem.foodName}</h5>
//               </div>
//             </div>
//             </Link> 
//           </div>
//         ))}
//       </div>
//     );
// };

// export default NutritionCard

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NutritionCard = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const foodItemRef = ref(db, "FoodItems");
    onValue(foodItemRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const foodItemsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setFoodItems(foodItemsArray);
      } else {
        setFoodItems([]);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto max-w-screen-lg">
      {foodItems.map((foodItem) => (
        <motion.div key={foodItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link to={`/NutritionCalculator/${foodItem.id}`}>
            <div className="relative">
              <img
                alt={foodItem.foodName}
                className="w-full h-[240px] object-cover"
                src={foodItem.image}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-david-libre font-semibold text-white text-center">{foodItem.foodName}</h3>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NutritionCard;
