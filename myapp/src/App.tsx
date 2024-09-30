import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Pages/Home';
import Test from './Routes/Pages/Test';
import AboutUs from './Routes/Pages/AboutUs';
import NavBar from './Routes/Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar is outside Routes so it always shows */}
        <NavBar />
        
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
