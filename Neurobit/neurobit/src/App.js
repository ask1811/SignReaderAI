import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './Components/DataContext';
// import Side from './Components/Side/Side';
import Upload from './Pages/Upload/Upload';
import Preview from './Pages/Preview/Preview';
import Preview2 from './Pages/Preview2/Preview2';
// import Footer from './Components/Footer/Footer';
// import Stepper from './Components/Stepper/Stepper';
import Map from './Pages/Map/Map';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import credit from '../src/Images/credit.png';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div id="app" style={{ height: "100vh", display: "flex" }}>
          <Sidebar className='Side'>
            <h1 className='rea'>React Test</h1>
            <Menu>
              <MenuItem className='men' icon={<GridViewIcon />} style={{ color: "White" }}>Dashboard</MenuItem>
              <MenuItem className='men' icon={<NoteAddOutlinedIcon />} style={{ color: "White" }}>Montages</MenuItem>
              <MenuItem className='men' icon={<MonetizationOnOutlinedIcon />} style={{ color: "White" }}>Credits</MenuItem>
            </Menu>
            <img className='credit' src={credit} />
          </Sidebar>
          <BrowserRouter>
            <Routes>
              <Route path='/' className='up' element={<Upload />} />
              <Route path='/Map.js' element={<Map />} />
              <Route path='/Preview.js' element={<Preview />} />
              <Route path='/Preview2.js' element={<Preview2 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div >
    </DataProvider>
  );
}

export default App;