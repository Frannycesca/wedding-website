// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("app")
// );
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
 
const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();