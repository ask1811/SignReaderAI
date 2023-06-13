import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div class="nav">
            <div class="nav-header">
                <div class="nav-title">
                    <a href="/" target="_self" className='btn0'>
                        <span class="replies">SignReaderAI</span>
                    </a>
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>


        </div >
    )
}

export default Navbar
