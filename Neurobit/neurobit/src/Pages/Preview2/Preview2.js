import React from 'react'
import './Preview2.css';
import pg4bar from '../../Images/pg4bar.png';
// import image from '../../Images/image.png';
import Button from '@mui/material/Button';
import Toast from '../../Components/Toast/Toast'
import testList from '../../Components/testList'
// import checkIcon from '../../assets/check.svg';
const Preview2 = () => {
    return (
        <div className='wholemaps'>
            <Toast className='toas'
                toastList={testList}
                position="bottom-right" />
            <h1 style={{ color: "Black", marginLeft: "5rem" }}>
                Test_Study</h1>
            <img className='pg2bar' src={pg4bar} />
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
                <span><h3 className='wano'>Additional Settings : Artifacts, Spindle</h3></span>
            </div>
        </div >
    )
}

export default Preview2
