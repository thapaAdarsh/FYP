import Button from "./Button"
import {motion} from "framer-motion";
const OnlineOrder = () => {
  return (
    <>
      <motion.div className="mx-auto md:flex md:justify-between min-h-screen lg:max-w-4xl xl:max-w-6xl xl:items-center  pt-20"         initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}>
        <div className="table-left lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl xl:text-left xl:text-6xl text-center font-extrabold font-david-libre md:text-3xl tracking-wide">
            <span className="xl:text-6xl  text-orange-500 ">Order </span> your
            Favourite Food at home.
          </h2>
          <p className="leading-loose text-center md:text-left first-letter:text-slate-900 md:my-6 my-3">
            Welcome to the table booking system of our website. You can choose
            your table for you and your famaily. You can found variety of table
            in this segments here. Enjoy your day with our delicious &
            nutrition's food.
          </p>
          <div className="buttons flex justify-center md:justify-start my-4">
            <Button buttonText = "Order Now"/>
          </div>
        </div>
        <div className="table-right-image my-2 lg:w-1/2">
          <img
            src="/img/onlineOrder.png"
            alt=""
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.div>
    </>
  );
};

export default OnlineOrder;
