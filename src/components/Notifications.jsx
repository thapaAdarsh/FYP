// import { useState, useEffect } from "react";
// import { auth, db } from "../firebase";
// import { ref, onValue } from "firebase/database";

// const Notifications = ( ) => {
//   const [tableBookings, setTableBookings] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchTableBookings = () => {
//       const userId = auth.currentUser ? auth.currentUser.uid : null;
//       if (userId) {
//         const tableBookingsRef = ref(db, `tableBooking/${userId}`);
//         onValue(tableBookingsRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             const userTableBookings = Object.values(data);
//             setTableBookings(userTableBookings);
//           } else {
//             setTableBookings([]);
//           }
//         });
//       }
//     };

//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         fetchTableBookings();
//       } else {
//         setTableBookings([]);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800 mt-24 max-w-6xl mx-auto min-h-screen">
//       <table className="w-full table-auto text-left">
//         <thead className="bg-gray-100 dark:bg-gray-800">
//           <tr>
//             <th className="px-4 py-3 font-semibold">Table ID</th>
//             <th className="px-4 py-3 font-semibold">Date</th>
//             <th className="px-4 py-3 font-semibold">Time</th>
//             <th className="px-4 py-3 font-semibold">Occasion</th>
//             <th className="px-4 py-3 font-semibold">People</th>
//             <th className="px-4 py-3 font-semibold">Status</th>
//             <th className="px-4 py-3 font-semibold">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableBookings.map((tableBooking) => (
//             <tr
//               key={tableBooking.id}
//               className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
//             >
//               <td className="px-4 py-3">{tableBooking.tableId}</td>
//               <td className="px-4 py-3">{tableBooking.date}</td>
//               <td className="px-4 py-3">{tableBooking.time}</td>
//               <td className="px-4 py-3">{tableBooking.occasion}</td>
//               <td className="px-4 py-3">{tableBooking.people}</td>
//               <td className="px-4 py-3 capitalize">{tableBooking.status}</td>
//               <td className="px-4 py-3"><button className="text-white bg-red-500 p-1.5 rounded-lg font-medium">Cancel</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Notifications;

// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase';
// import { ref, onValue } from 'firebase/database';
// import Swal from 'sweetalert2';

// const Notifications = () => {
//   const [tableBookings, setTableBookings] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     const fetchTableBookings = () => {
//       const userId = auth.currentUser ? auth.currentUser.uid : null;
//       if (userId) {
//         const tableBookingsRef = ref(db, `tableBooking/${userId}`);
//         onValue(tableBookingsRef, (snapshot) => {
//           const data = snapshot.val();
//           if (data) {
//             const userTableBookings = Object.values(data);
//             setTableBookings(userTableBookings);
//           } else {
//             setTableBookings([]);
//           }
//         });
//       }
//     };

//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         fetchTableBookings();
//       } else {
//         setTableBookings([]);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handleCancelBooking = async (bookingId) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: 'You will not be able to recover this booking!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, cancel it!',
//         cancelButtonText: 'No, keep it',
//       });

//       if (result.isConfirmed) {
//         await db.ref(`tableBooking/${auth.currentUser.uid}/${bookingId}`).update({ status: 'cancelled' });
//         Swal.fire('Cancelled!', 'Your booking has been cancelled.', 'success');
//       }
//     } catch (error) {
//       console.error('Error cancelling booking:', error);
//     }
//   };

//   return (
//     <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm dark:border-gray-800 mt-24 max-w-6xl mx-auto min-h-screen">
//       <table className="w-full table-auto text-left">
//         <thead className="bg-gray-100 dark:bg-gray-800">
//           <tr>
//             <th className="px-4 py-3 font-semibold">Table ID</th>
//             <th className="px-4 py-3 font-semibold">Date</th>
//             <th className="px-4 py-3 font-semibold">Time</th>
//             <th className="px-4 py-3 font-semibold">Occasion</th>
//             <th className="px-4 py-3 font-semibold">People</th>
//             <th className="px-4 py-3 font-semibold">Status</th>
//             <th className="px-4 py-3 font-semibold">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableBookings.map((tableBooking) => (
//             <tr
//               key={tableBooking.id}
//               className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
//             >
//               <td className="px-4 py-3">{tableBooking.tableId}</td>
//               <td className="px-4 py-3">{tableBooking.date}</td>
//               <td className="px-4 py-3">{tableBooking.time}</td>
//               <td className="px-4 py-3">{tableBooking.occasion}</td>
//               <td className="px-4 py-3">{tableBooking.people}</td>
//               <td className="px-4 py-3 capitalize">{tableBooking.status}</td>
//               <td className="px-4 py-3">
//                 <button
//                   className="text-white bg-red-500 p-1.5 rounded-lg font-medium"
//                   onClick={() => handleCancelBooking(tableBooking.id)}
//                 >
//                   Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { auth, db } from "../firebase"; // assuming you have a firebase config file
import { ref, onValue, update } from "firebase/database";
import Swal from "sweetalert2";

const Notifications = () => {
  const [tableBookings, setTableBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTableBookings = () => {
      // Fetch table bookings based on the current user ID
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (userId) {
        const tableBookingsRef = ref(db, `tableBooking/${userId}`);
        onValue(tableBookingsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert object to array and set to state
            const userTableBookings = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setTableBookings(userTableBookings);
          } else {
            setTableBookings([]);
          }
        });
      }
    };

    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is authenticated, fetch table bookings
        fetchTableBookings();
      } else {
        // If user is not authenticated, clear table bookings
        setTableBookings([]);
      }
    });

    return () => {
      // Unsubscribe from the authentication listener when component unmounts
      unsubscribe();
    };
  }, []);



  const handleCancel = (booking) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedBooking = { ...booking, status: "cancelled" };
        const updatedBookingsRef = ref(
          db,
          `tableBooking/${auth.currentUser.uid}/${booking.id}`
        );
        update(updatedBookingsRef, updatedBooking)
          .then(() => {
            Swal.fire(
              "Cancelled!",
              "Your booking has been cancelled.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error cancelling booking:", error);
            Swal.fire(
              "Error!",
              "An error occurred while cancelling your booking. Please try again later.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : ( */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-24 max-w-6xl mx-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Table
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Occasion
              </th>
              <th scope="col" className="px-6 py-3">
                People
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableBookings.map((tableBooking) => (
              <tr
                key={tableBooking.id}
                className="border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
              >
                {console.log(tableBooking.id)}
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.tableId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.occasion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.people}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {tableBooking.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleCancel(tableBooking)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Notifications;

