import React from 'react';
import './Upload.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import pg1bar from '../../Images/pg1bar.png';
import Button from '@mui/material/Button';
const Upload = () => {
    return (
        <div className='up'>
            <h1 style={{ color: "Black", marginLeft: "5rem", marginTop: "5rem" }}>
                Test_Study</h1>
            <img className='pg1bar' src={pg1bar} />
            <div className='browse'>
                <PictureAsPdfIcon className='fileicon' style={{
                    color: "#2F7EC7", height: "80px", width: "65px"
                }} />
                <Button className='bf' variant="outlined">Browse Files</Button>
                <h3 className='dr'>or drop files here</h3>
            </div>
            <div className='bro'>
                <span><Button variant="outlined">Back</Button></span>
                <span className='spacan'> <h3 className='can'>Cancel Montage</h3></span>
                <span><Button variant="contained" href="../Map.js">
                    Next
                </Button></span>
            </div>
        </div >
    )
}

export default Upload;
