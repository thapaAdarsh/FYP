import AdminNavbar from './AdminNavbar';

const Admin = () => {
  return (
    <>
    <AdminNavbar/>
    <div className="ml-64">
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-david-libre mb-4 font-bold text-gray-800">Admin Homepage</h1>
        <div className="flex space-x-4">
          <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">Total Orders</h2>
            <p className="text-2xl font-bold text-gray-800">120</p>
          </div>
          <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">Total Food Items</h2>
            <p className="text-2xl font-bold text-gray-800">50</p>
          </div>
          <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">Total Revenue</h2><p className="text-2xl font-bold text-gray-800">$12,000</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Admin;