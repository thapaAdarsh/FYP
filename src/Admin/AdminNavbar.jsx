import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faBox, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
  return (
    <div className="">
      <div className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-white text-2xl font-bold font-david-libre">Admin</h1>
      </div>
      <nav className="text-white font-david-libre font-semibold">
        <ul className="space-y-3">
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/Admin" className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/AddFoodItem" className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faUtensils} />
              <span>Add Food</span>
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/products" className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faBox} />
              <span>Products</span>
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/notifications" className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faBell} />
              <span>Notifications</span>
            </Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link to="/logout" className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default AdminNavbar;
