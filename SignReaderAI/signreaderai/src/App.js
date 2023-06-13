import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detection from './Pages/Detection/Detection';
import Navbar from './Components/Navbar/Navbar';
import Webcam from "react-webcam";
// import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detection' element={<Detection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;