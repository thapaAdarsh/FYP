import { useState, useEffect } from "react";
import {motion} from "framer-motion";
const AddToCart = () => {
  // Initialize cartItems state
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Run once on component mount

  // Update localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to handle decreasing quantity of an item in the cart
  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  // Function to handle increasing quantity of an item in the cart
  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to handle removing an item from the cart
  const handleRemove = (itemId) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <motion.div className="bg-gray-100 min-h-screen pt-20"          initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 py-8 xl:px-32">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            My Cart ({cartItems.length})
          </h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl shadow-lg shadow-gray-400 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2 img box">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-lg:w-full lg:w-[180px] rounded-md"
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                      {item.foodName}
                    </h5>
                    <button
                      className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                      onClick={() => handleRemove(item.id)}
                    >
                      <img src="/img/delete.png" alt="" className="h-10" />
                    </button>
                  </div>
                  {/* <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                    {item.description}
                  </p> */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 9.5H13.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="number"
                        value={item.quantity}
                        readOnly
                        className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1 px-1 bg-gray-100 text-center"
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 9.5H14.25M9 14.75V4.25"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-gray-900 font-manrope font-bold text-2xl leading-9 text-right">
                      {`Rs.${item.price * item.quantity}`}
                    </h6>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5">
            <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-gray-900">{`Rs.${subtotal}`}</h6>
          </div>
        </div>

        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <button className="rounded-full py-4 px-6 bg-orange-400 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-orange-500 font-david-libre xl:text-2xl">
            Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddToCart;
