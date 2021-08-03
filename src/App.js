import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Router';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;