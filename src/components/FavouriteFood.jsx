import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FavoriteFood = () => {
  const [favoriteFoods, setFavoriteFoods] = useState(() => {
    const storedFavoriteFoods = localStorage.getItem("favoriteFoods");
    return storedFavoriteFoods ? JSON.parse(storedFavoriteFoods) : [];
  });

  useEffect(() => {
    const storedFavoriteFoods = localStorage.getItem("favoriteFoods");
    setFavoriteFoods(storedFavoriteFoods ? JSON.parse(storedFavoriteFoods) : []);
  }, []);

  const handleRemoveFavorite = (foodItem) => {
    const updatedFavoriteFoods = favoriteFoods.filter(
      (item) => item.id !== foodItem.id
    );

    setFavoriteFoods(updatedFavoriteFoods);
    localStorage.setItem("favoriteFoods", JSON.stringify(updatedFavoriteFoods));
  };

  return (
    <>
      <div className="flex justify-center min-h-screen p-4 pt-28 bg-gray-100">
        <div className="w-full md:max-w-xl lg:max-w-6xl p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center font-david-libre lg:text-5xl">
            Favorite Foods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favoriteFoods.map((foodItem, index) => (
              <motion.div
                key={foodItem.id}
                className="flex flex-col items-center px-4 py-6 rounded-xl overflow-hidden shadow-md bg-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.6 }}
              >
                <div className="w-full relative">
                  <img
                    src={foodItem.image}
                    alt="Food"
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold font-david-libre text-center mt-2">
                  {foodItem.foodName}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }} // Hover animation: button scales up
                  whileTap={{ scale: 0.9 }} // Tap animation: button scales down
                  className="bg-orange-400 text-white py-2 px-3 rounded w-full mt-2 font-semibold font-david-libre"
                  onClick={() => handleRemoveFavorite(foodItem)}
                >
                  Delete
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteFood;





