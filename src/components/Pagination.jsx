// // import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import { Link } from "react-router-dom";

// const Pagination = () => {
//   return (
//     <>
//       <div className="flex items-center xl:max-w-6xl lg:mx-auto justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//         <div className="flex flex-1 justify-between">
//           <Link
//             href="/"
//             className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Previous
//           </Link>
//           <Link
//             href="/"
//             className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Next
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pagination;

import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
      window.scrollTo(0, 0); // Scroll to the top of the window
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
      window.scrollTo(0, 0); // Scroll to the top of the window
    }
  };

  return (
    <div className="flex items-center xl:max-w-6xl lg:mx-auto justify-between border-t border-gray-400 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <button
          onClick={prevPage}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
