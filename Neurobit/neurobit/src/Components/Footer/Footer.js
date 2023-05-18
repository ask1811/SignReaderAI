import React from 'react'
import Button from '@mui/material/Button';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <Button variant="outlined">Back</Button>
            <h1>Cancel Message</h1>
            <Button variant="outlined" href="#outlined-buttons">
                Link
            </Button>
        </div>
    )
}

export default Footer;
