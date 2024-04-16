import { motion } from "framer-motion";
const Button = ({ buttonText }) => {
  return (
    <div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-orange-400 rounded-full font-david-libre w-36 p-2 text-lg shadow-lg shadow-gray-200 mr-2"
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default Button;
