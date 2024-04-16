import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const NutritionCalculator = () => {
    const { id } = useParams();
    const [foodItem, setFoodItem] = useState(null);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(() => {
        const foodItemRef = ref(db, `FoodItems/${id}`);
        onValue(foodItemRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setFoodItem(data);
            } else {
                setFoodItem(null);
            }
        });
    }, [id]);



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
        <>
        <motion.div className="bg-black bg-opacity-5 min-h-screen"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{duration:0.5}}>
            <div className="md:px-20 xl:px-40 pt-20">
                <h1 className="p-2 font-bold text-center text-gray-800 font-david-libre text-3xl lg:text-5xl lg:pt-8">
                    Nutrition's Calculator
                </h1>
                <p className="text-center text-sm lg:text-lg">
                    These are all the nutritions available in this <span className="font-bold">{foodItem.foodName}</span>
                </p>
                <div className="main-row lg:flex lg:space-x-16 lg:justify-center lg:my-4 xl:space-x-20">
                    <div className="row-one flex justify-between lg:space-x-16 xl:space-x-20">
                        <div className="calorie p-2 text-center">
                            <h1 className="text-4xl font-thin text-center">{foodItem.fat}</h1>
                            <p className="text-sm font-bold">Total fat</p>
                        </div>
                        <div className="calorie p-2 text-center">
                            <h1 className="text-4xl text-center font-thin">
                                {foodItem.calorie}
                            </h1>
                            <p className="text-sm font-bold">Total Calories</p>
                        </div>
                    </div>
                    <div className="row-two flex justify-around bg-orange-40 lg:space-x-16 xl:space-x-20">
                        <div className="calorie p-2 text-center">
                            <h1 className="text-4xl font-thin text-center">
                                {foodItem.carbs}
                            </h1>
                            <p className="text-sm font-bold">Total Carbs</p>
                        </div>
                        <div className="calorie p-2 text-center">
                            <h1 className="text-4xl font-thin">{foodItem.protein}</h1>
                            <p className="text-sm font-bold">Protein</p>
                        </div>
                    </div>
                </div>

                <div className="text-sm md:2xl lg:text-3xl py-6 font-bold text-gray-700 font-david-libre mt-10">
                    Showing Nutrition for: {foodItem.foodName}
                </div>

                <div className="flex h-34 bg-white shadow-gray-400 shadow-lg p-4 rounded-2xl items-center">
                    <div className="flex-grow flex items-center ">
                        <img src={foodItem.image} alt={foodItem.foodName} className="h-16 border w-auto mr-4" />
                        <span className="text-lg font-bold">{foodItem.foodName}</span>
                    </div>

                    <Link to="/Nutrition">
                    <div className="flex items-center">
                        <button className="bg-orange-400 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                            Add another item
                        </button>
                    </div>
                    </Link>
                </div>


            </div>
        </motion.div>
    </>
    );
};

export default NutritionCalculator;
