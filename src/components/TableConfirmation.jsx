// import { useParams, Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// const TableConfirmation = () => {
//   const { id } = useParams();
//   const { state } = useLocation();
//   const booking = state || {};

//   return (
//     <motion.div
//       className="min-h-screen bg-gray-100 flex items-center justify-center py-24"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="w-full xl:max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="px-6 py-4">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-david-libre">
//             Table Confirmation
//           </h2>
//           <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 w-full xl:max-w-3xl mx-auto rounded-lg shadow-lg">
//             <p className="text-lg font-semibold">Booking Confirmed!</p>
//             <p>
//               Dear {booking.fullName}, your table has been successfully booked.
//               Thank you!
//             </p>
//           </div>
//           <div className="flex flex-col bg-gray-100 lg:flex-row items-center justify-center mb-4">
//             <div className=" mb-8 lg:mb-0 lg:w-1/2">
//               <div className=" p-6 rounded-lg">
//                 <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
//                   <p className="text-gray-700 font-semibold mb-1">
//                     Your Full Name
//                   </p>
//                   <p className="text-gray-800">{booking.fullName}</p>
//                 </div>
//                 <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
//                   <p className="text-gray-700 font-semibold mb-1">
//                     Number of Seats
//                   </p>
//                   <p className="text-gray-800">{booking.people}</p>
//                 </div>
//                 <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
//                   <p className="text-gray-700 font-semibold mb-1">
//                     Selected Date and Time
//                   </p>
//                   <p className="text-gray-800">{booking.date}</p>
//                 </div>
//                 <div className="mb-4 bg-white p-4 rounded-lg shadow-lg">
//                   <p className="text-gray-700 font-semibold mb-1">
//                     Select Time
//                   </p>
//                   <p className="text-gray-800">{booking.time}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="h-full p-6  rounded-lg shadow-r-md">
//                 <div className="flex justify-center mb-4">
//                   <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
//                     <p className="text-2xl font-bold text-gray-800">
//                       Table: 0{booking.tableId || id}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center lg:justify-between mt-4">
//             <Link
//               to="/TableBooking"
//               className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
//             >
//               Back
//             </Link>
//             <Link
//               to="/"
//               state={booking}
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
//             >
//               Confirm Booking
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default TableConfirmation;


import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const TableConfirmation = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const booking = state || {};

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex items-center justify-center py-24"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full xl:max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <motion.h2
            className="text-3xl font-bold text-gray-800 text-center mb-6 font-david-libre"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Table Confirmation
          </motion.h2>
          <motion.div
            className="bg-green-100 border-l-8 border-green-500 text-green-700 p-4 mb-8 w-full xl:max-w-3xl mx-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg font-semibold">Booking Confirmed!</p>
            <p>
              Dear {booking.fullName}, your table has been successfully booked
              for {booking.people} people on {booking.date} at {booking.time}. 
              We look forward to hosting you for this {booking.function}!
            </p>
          </motion.div>
          {/* Rest of your content */}
          <div className="flex justify-center lg:justify-end mt-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/"
                state={booking}
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
              >
                Thanks 
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TableConfirmation;

