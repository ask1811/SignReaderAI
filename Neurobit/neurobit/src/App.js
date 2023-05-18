import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Side from './Components/Side/Side';
import Upload from './Pages/Upload/Upload';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Side />
        <Routes>
          <Route path='/' element={<Upload />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;