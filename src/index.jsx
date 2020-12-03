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

<<<<<<< HEAD
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  module.hot.accept()                    // eslint-disable-line no-undef  
}
=======
module.hot.accept();
>>>>>>> 261e191a0451c805e894f48c925f42513f28efbf
