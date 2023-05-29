import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Components/DataContext';
import './Preview.css';
import pg3bar from '../../Images/pg3bar.png';
import Button from '@mui/material/Button';
const Preview = () => {
    const { data } = useContext(DataContext);
    const [storedData, setStoredData] = useState('');

    useEffect(() => {
        const retrievedData = localStorage.getItem('myData');
        setStoredData(retrievedData);
    }, []);
    return (
        <div className='wholemaps'>
            <h1 style={{ color: "Black", marginLeft: "5rem" }}>
                Test_Study</h1>
            <img className='pg2bar' src={pg3bar} />
            <div className='blu'>
                <span>Channel</span>
                <span className='pri'>Primary Channel(default select)</span>
                <span className='refr'>Reference Channel(default N/A)</span>
            </div>
            <div className="container">
                <div className="easy-grid">
                    <div className="example-block"><h2>C3-A2</h2></div>
                    <div className="example-block"> <h2>C3</h2>
                    </div>
                    <div className="example-block"><h2>A2</h2></div>
                    <div className="example-block"><Button variant="outlined" href="../Map.js">
                        Edit Channel
                    </Button></div>
                    <div className="example-block"><h2>C4-A1</h2></div>
                    <div className="example-block"><h2>C4</h2>
                    </div>
                    <div className="example-block"><h2>A1</h2></div>
                    <div className="example-block"><Button variant="outlined" href="../Map.js">
                        Edit Channel
                    </Button></div>
                    <div className="example-block"><h2>EOGL-A2</h2></div>
                    <div className="example-block"><h2>EOGL</h2>
                    </div>
                    <div className="example-block"><h2>A2</h2></div>
                    <div className="example-block"><Button variant="outlined" href="../Map.js">
                        Edit Channel
                    </Button></div>
                    <div className="example-block"><h2>EOGR-A1</h2></div>
                    <div className="example-block"><h2>EOGR</h2>
                    </div>
                    <div className="example-block"><h2>A1</h2></div>
                    <div className="example-block"><Button variant="outlined" href="../Map.js">
                        Edit Channel
                    </Button></div>
                    <div className="example-block"><h2>EMG</h2></div>
                    <div className="example-block"><h2>EMG</h2>
                    </div>
                    <div className="example-block"><h2>N/A</h2></div>
                    <div className="example-block"><Button variant="outlined" href="../Map.js">
                        Edit Channel
                    </Button></div>
                </div>
            </div >
            <div className='wan'>
                <span><h3 className='wano'>Output Format:   Wanombi.xml</h3></span>
            </div>
            <div className='bro'>
                <span><Button variant="outlined" href="../Map.js">Back</Button></span>
                <span> <h3 className='can'>Cancel Montage</h3></span>
                <span><Button variant="contained" href="../Preview2.js">
                    Save
                </Button></span>
            </div>
        </div >
    )
}

export default Preview
