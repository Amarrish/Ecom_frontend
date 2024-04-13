// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Shopcontextshare from './components/Context/Shopcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shopcontextshare>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Shopcontextshare>
  </React.StrictMode>
);
