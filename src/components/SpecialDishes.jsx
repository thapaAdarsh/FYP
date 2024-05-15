import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, get, onValue } from "firebase/database";
import { db } from "../firebase";

const SpecialDishes = () => {
  const [specialDishes, setSpecialDishes] = useState([]);

  useEffect(() => {
    const fetchSpecialDishes = async () => {
      try {
        const foodItemRef = ref(db, "FoodItems");
        onValue(foodItemRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const foodItemsArray = Object.entries(data)
              .map(([key, value]) => ({
                id: key,
                ...value,
              }))
              .slice(0, 4); // Fetch the first three food items

            setSpecialDishes(foodItemsArray);
          } else {
            setSpecialDishes([]);
          }
        });
      } catch (error) {
        console.error("Error fetching special dishes:", error);
      }
    };

    fetchSpecialDishes();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto py-12 px-4">
      {specialDishes.map((foodItem) => (
        <div key={foodItem.id} className="relative group overflow-hidden rounded-lg shadow-md shadow-gray-400 ">
          <img
            alt={foodItem.foodName}
            className="object-cover w-full h-80 md:h-full"
            src={foodItem.image}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/60 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-gray-900 to-transparent">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{foodItem.foodName}</h2>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              {foodItem.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg md:text-xl font-bold text-white">Rs.{foodItem.price}</span>
              <Link to={`/FoodDetail/${foodItem.id}`} className="text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-300">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialDishes;
