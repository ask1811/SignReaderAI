import React from 'react'
import './Map.css';
import pg2bar from '../../Images/pg2bar.png';
import Button from '@mui/material/Button';
const Map = () => {
    return (
        <div>
            <h1 style={{ color: "Black", marginLeft: "5rem" }}>
                Test_Study</h1>
            <img className='pg2bar' src={pg2bar} />
        </div>
    )
}

export default Map
