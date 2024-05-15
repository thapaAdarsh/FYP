import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import Searchbar from "./Searchbar"; // Import the Searchbar component
import FoodCard from "./FoodCard";

const FoodContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  useEffect(() => {
    let filteredResults = foodItems;
    if (searchQuery) {
      // Filter food items based on search query
      filteredResults = foodItems.filter((item) =>
        item.foodName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCategory) {
      // Filter food items based on selected category
      filteredResults = foodItems.filter((item) =>
        item.foodName.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    setSearchResults(filteredResults);
  }, [searchQuery, foodItems, selectedCategory]);

  // Event handler for handling category button click
  const handleCategoryClick = (foodName) => {
    setSearchQuery(""); // Clear search query when a category is selected
    if (foodName === "All") {
      setSelectedCategory("");
      setSearchResults(foodItems);
    } else {
      setSelectedCategory(foodName);
      setSearchResults(
        foodItems.filter((item) =>
          item.foodName.toLowerCase().includes(foodName.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="xl:max-w-6xl mx-auto">
      <Searchbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery function as prop */}
      
      <div className="menu-bar mt-4 p-2 md:max-w-4xl xl:max-w-6xl mx-auto">
        <div className="flex lg:justify-center overflow-x-scroll space-x-3 font-bold no-scrollbar py-4">
          <button
            type="button"
            className={`p-3 border shadow-gray-400 shadow-md  rounded-xl hover:text-white ${selectedCategory === "" ? "bg-orange-400 text-white" : ""} hover:bg-orange-400 px-6`}
            onClick={() => handleCategoryClick("")}
          >
            All
          </button>
          <button
            type="button"
            className={`p-3 border rounded-xl hover:bg-orange-400 shadow-gray-400 shadow-md hover:text-white px-4 ${selectedCategory === "burger" ? "bg-orange-400 text-white" : ""}`}
            onClick={() => handleCategoryClick("burger")}
          >
            Burger
          </button>
          <button
            type="button"
            className={`p-3 border rounded-xl hover:bg-orange-400 shadow-gray-400 shadow-md hover:text-white px-4 ${selectedCategory === "pizza" ? "bg-orange-400 text-white" : ""}`}
            onClick={() => handleCategoryClick("pizza")}
          >
            Pizza
          </button>
          <button
            type="button"
            className={`p-3 border border-gray-300 rounded-xl shadow-gray-400 shadow-md hover:bg-orange-400 hover:text-white px-4 ${selectedCategory === "sandwich" ? "bg-orange-400 text-white" : ""}`}
            onClick={() => handleCategoryClick("sandwich")}
          >
            Sandwich
          </button>
          {/* Add buttons for other categories */}
        </div>
      </div>
      
      {/* Rest of your JSX */}
      <div className="secial-items px-3 font-bold font-david-libre mt-1">
        <h1 className="text-2xl sm:text-3xl p-1 xl:max-w-6xl mx-auto">
          Our Special Items
        </h1>
      </div>
      <hr className="border-gray-400 max-w-6xl mx-auto" />
      <hr className="border-gray-500 max-w-6xl mx-auto border-dotted" />

      <FoodCard foodItems={searchResults} />
    </div>
  );
};

export default FoodContainer;