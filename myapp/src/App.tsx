import React, { useEffect, useState } from 'react';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Routes/Pages/Home';
import Test from './Routes/Pages/Test';
import NavBar from './Routes/Components/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/test' Component={Test}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
