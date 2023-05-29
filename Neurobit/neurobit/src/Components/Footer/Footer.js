import React from 'react'
import Button from '@mui/material/Button';
import './Footer.css';
const Footer = () => {
    return (
        <div className='bro'>
            <Button className='bo' variant="outlined">Back</Button>
            <h3 className='bo'>Cancel Message</h3>
            <Button className='bo' variant="outlined" href="../Map.js">
                Next
            </Button>
        </div>
    )
}

export default Footer;
// import React from 'react'

// const Footer = () => {
//     return (
//         <div>
//             <div class="copyright">
//                 <p>&copy 2013 - Organisation</p>
//             </div>
//             <div class="social">
//                 <a &" class="support">Contact Us</a>
//                 <a &" class="face">f</a>
//                 <a &" class="tweet">t</a>
//                 <a &" class="linked">in</a>
//             </div>
//         </footer>
//         </div >
//     )
// }

// export default Footer
