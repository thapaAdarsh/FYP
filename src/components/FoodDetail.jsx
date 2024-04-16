import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RatingAndReview } from "./RatingAndReview";
import { motion } from "framer-motion";
const FoodDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = () => {
    if (foodItem) {
      const existingCartItem = cartItems.find(
        (item) => item.id === foodItem.id
      );

      if (existingCartItem) {
        // If the item already exists in the cart, update the quantity
        const updatedCartItems = cartItems.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCartItems);
      } else {
        // If the item doesn't exist yet, add it to the cart
        const newCartItem = { ...foodItem, quantity: 1 };
        setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);

        // Show alert that the food item was added successfully
        window.alert(`${foodItem.foodName} added successfully to the cart!`);
      }
    }
  };

  if (!foodItem) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <p>Error: Food item not found!</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-gray-100 min-h-screen pt-28"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={foodItem.image}
              alt={foodItem.foodName}
              className="w-full h-64 object-cover rounded-lg mb-4 lg:h-96"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-david-libre lg:text-4xl xl:text-5xl font-bold mb-2">
              {foodItem.foodName}
            </h2>
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
                  <li className="">Total Calorie: {foodItem.calories} gm</li>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="add-to-cart p-4 hover:bg-orange-500 bg-orange-400 text-white font-bold rounded-3xl drop-shadow-md text-sm tracking-wider"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <Link>
                <button className="p-4 hover:bg-gray-800 hover:text-white bg-gray-200 text-gray-700 font-bold rounded-3xl drop-shadow-md text-sm tracking-wider">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-6xl mt-4 mx-auto border-dotted border-t-2 border-gray-500" />
      <hr className="max-w-6xl mt-1 mx-auto border-t-2 border-gray-500" />
      <RatingAndReview reviews={reviews} />
    </motion.div>
  );
};

export default FoodDetail;
