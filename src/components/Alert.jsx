import { useState, useEffect } from "react";

const Alert = ({ type, message, onClose }) => {
  // Determine alert color based on type
  const alertColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onClose(); // Call onClose when the timeout is finished
    }, 4000); // 4 seconds timeout

    // Clear timeout if the component is unmounted or show is set to false
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <>
      {show && (
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center`}>
          <div className={`w-full max-w-screen-lg p-4 rounded-md shadow-md ${alertColor} text-white relative`}>
            <p className="text-lg">{message}</p>
            <button
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-200"
              onClick={() => {
                setShow(false);
                onClose(); // Call onClose when the close button is clicked
              }}
            >
              &#x2715; {/* Unicode for the cross symbol */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
