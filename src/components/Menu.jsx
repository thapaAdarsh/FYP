
import FoodContainer from "./FoodContainer";
import {motion} from "framer-motion"

const Menu = () => {
  return (
    <div>
      <motion.div 
      className="main-container p-4 box-border bg-black bg-opacity-5 pt-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{duration:0.5}}
      >
        <div className="menu">
          <h2 className="font-david-libre font-extrabold text-4xl text-center p-4 sm:text-5xl md:text-6xl">
            Our Menu
          </h2>
        </div>
        <div className="">
          <FoodContainer />
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;


