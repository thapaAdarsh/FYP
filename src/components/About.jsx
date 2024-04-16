import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";


const About = () => {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <div>
      <motion.div
        className="main-container pt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="main-heading h-screen p-4 sm:p-10 md:flex  lg:max-w-4xl xl:max-w-6xl mx-auto lg:justify-between lg:items-center">
          <div className="left md:my-4 lg:w-1/2 lg:my-14 xl:my-28">
            <h1 className="font-david-libre font-black text-4xl md:text-5xl xl:text-5xl tracking-wide text-center lg:text-left">
              Every Bite is a Celebration of Health and Flavor
            </h1>
            <p className="text-center md:my-2 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              incidunt, laborum recusandae eveniet inventore natus dolor at quas
              repellendus perferendis, expedita aspernatur itaque.
            </p>
            <div className="buttons  md:my-4 flex justify-center lg:justify-start">
              <button className="text-white bg-black rounded-full font-david-libre border-box w-28 p-2 text-lg">
                Menu
              </button>
              <button
                className="text-white bg-orange-400 rounded-full
                    font-david-libre  w-36 p-2 ml-4 text-lg"
              >
                Book a table
              </button>
            </div>
          </div>
          <div className="right lg:w-1/2">
            <div className="image justify-center space-x-10">
              <motion.img
                src="/img/aboutFood.png"
                alt=""
                className="rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>

        {/* <!-- ----------------second------------part--------------- --> */}
        <div className="second-container bg-black bg-opacity-5 p-4 sm:p-10 lg:px-20 ">
          <div className="xl:max-w-6xl mx-auto xl:pb-10">
          <motion.div style={{ scale }}>
          <div className="head">
            <h1 className="font-black font-david-libre text-3xl sm:text-4xl sm:text-center sm:my-4 md:text-5xl lg:text-6xl xl:text-7xl">
              We're passionate about our food.
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              porro beatae ad distinctio quos delectus veniam. Consequuntur
              provient odit architecto maiores.
            </p>
          </div>
          <div className="col-container flex flex-col space-y-6">
            {/* <!-- ---------------------1st col--------------------------- --> */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/tomato.jpg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Commitment to Quality</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- --------------------------second-row---------------------------- --> */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/vegetable.jpg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Our Food Experts</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* third column */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/basket-vetable.jpeg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Variety of Choices</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- -----------------------------fourth column-------------------- --> */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/meats.jpg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Fresh Meat and Fish</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- --------------------fifth row----------------------- --> */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/all-fruits.jpg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Variety of Fruits mixed</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- ------------------------sixth row---------------------------- --> */}
            <motion.div className="col-1 md:flex md:flex-row-reverse md:justify-between" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="image md:ml-4 md:my-4 md:w-1/2">
                <img
                  src="/img/vegii.jpg"
                  alt=""
                  className="md:object-cover md:rounded-lg md:h-44 md:w-full"
                />
              </div>
              <div className="para md:w-1/2">
                <div className="first-line flex my-2 items-center space-x-1">
                  <img src="/img/tick.png" alt="" className="h-8 w-auto" />
                  <h3 className="text-3xl">Commitment of Authentic Taste</h3>
                </div>
                <div className="second-line ml-10">
                  <p className="text-justify my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem maxime iusto labore.
                  </p>
                  <button className="text-white bg-[#EA6D27] rounded-md font-david-libre border-box w-36 p-2 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- -------------------------------End of rows----------------------- --> */}
          </div>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;


