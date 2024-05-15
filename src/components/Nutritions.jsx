import NutritionCard from "./NutritionCard";
import { motion } from "framer-motion";

const Nutritions = () => {
  return (
    <div>
      <motion.div
        className="main-container bg-black bg-opacity-5 p-4 pt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{duration:0.5}}
      >
        <div className="">
          <div className="md:px-20">
            <h1 className="p-2 font-bold text-center font-david-libre text-3xl lg:text-4xl lg:p-6 xl:text-5xl">
              Nutrition's Calculator
            </h1>
            <p className="text-center text-sm">
              Lorem, adipisicing elit. Veritatis consequuntur maxime quibusdam
              veniam nulla sapiente temporibus cumque est.
            </p>
            <div className="main-row lg:flex lg:space-x-16 lg:justify-center lg:my-4 xl:space-x-20">
              <div className="row-one flex justify-between lg:space-x-16 xl:space-x-20">
                <div className="calorie p-2">
                  <h1 className="text-4xl font-thin text-center">0</h1>
                  <p className="text-sm">Total fat</p>
                </div>
                <div className="calorie p-2">
                  <h1 className="text-4xl text-center font-thin">0</h1>
                  <p className="text-sm">Calories</p>
                </div>
              </div>
              <div className="row-two flex justify-around bg-orange-40 lg:space-x-16 xl:space-x-20">
                <div className="calorie p-2">
                  <h1 className="text-4xl font-thin text-center">0</h1>
                  <p className="text-sm">Total Carbs</p>
                </div>
                <div className="calorie p-2 text-center">
                  <h1 className="text-4xl font-thin">0</h1>
                  <p className="text-sm">Protein</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-3 my-4">
            <p className="text-sm text-center font-light">
              *Watch before you eat. Eat accroding to the nutrition's needed for
              you.
            </p>{" "}
            <hr className="border-black my-8 max-w-5xl mx-auto" />
          </div>
          <div className="row-forth p-6">
            <h4 className="font-bold font-david-libre text-2xl text-center text-4xl">
              Select from menu items
            </h4>
          </div>
          <div className="max-w-6xl mx-auto pb-14">
            <NutritionCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Nutritions;
