import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/About';
import Api from './Components/Api';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDOM.render( 

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/api" element={<Api />} />
  </Routes>
</BrowserRouter>

,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

