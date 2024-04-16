import React from 'react';

import ReactDOM  from 'react-dom';

import App from "./App";

// import "./index.css";

// src/main.js or src/main.ts
import './index.css';
// Your other JavaScript/TypeScript code here

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


// ReactDOM.render(
//       <App />,
      
//     document.getElementById('root')
//   );


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose={5000} />
  </React.StrictMode>,
  document.getElementById('root')
);
