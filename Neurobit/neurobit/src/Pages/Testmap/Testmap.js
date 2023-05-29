import React, { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext';
import './Testmap.css';
import pg2bar from '../../Images/pg2bar.png';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import data from '../../schema.json'
// export const DataContext = createContext();
const Testmap = () => {
    const { updateData } = useContext(DataContext);
    const [inputData, setInputData] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateData(inputData);
        localStorage.setItem('myData', inputData);
        setInputData('');
    };
    const [rowsa, setRowsa] = useState(['row1']);
    const addRowa = () => {
        const newRow = `row${rowsa.length + 1}`;
        setRowsa([...rowsa, newRow]);
    };
    const [rowsb, setRowsb] = useState(['row1']);
    const addRowb = () => {
        const newRow = `row${rowsb.length + 1}`;
        setRowsb([...rowsb, newRow]);
    };
    const [rowsc, setRowsc] = useState(['row1']);
    const addRowc = () => {
        const newRow = `row${rowsc.length + 1}`;
        setRowsc([...rowsc, newRow]);
    };
    const [rowsd, setRowsd] = useState(['row1']);
    const addRowd = () => {
        const newRow = `row${rowsd.length + 1}`;
        setRowsd([...rowsd, newRow]);
    };
    const [rowse, setRowse] = useState(['row1']);
    const addRowe = () => {
        const newRow = `row${rowse.length + 1}`;
        setRowse([...rowse, newRow]);
    };
    return (
        <>
            <div className='wholemap'>
                <h1 style={{ color: "Black", marginLeft: "5rem" }}>
                    Test_Study</h1>
                <img className='pg2bar' src={pg2bar} />
                <div className='blu'>
                    <span>Channel</span>
                    <span>Primary Channel(default select)</span>
                    <span>Reference Channel(default N/A)</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        {rowsa.map((row1) => (
                            <Row key={row1} row1={row1} value={inputData} onChange={handleInputChange} />
                        ))}
                        <button className='but' onClick={addRowa}>Add Backup Channel</button>
                    </div>
                    <div>
                        {rowsb.map((row2) => (
                            <R2ow key={row2} row2={row2} />
                        ))}
                        <button className='but' onClick={addRowb}>Add Backup Channel</button>
                    </div>
                    <div>
                        {rowsc.map((row3) => (
                            <R3ow key={row3} row3={row3} />
                        ))}
                        <button className='but' onClick={addRowc}>Add Backup Channel</button>
                    </div>
                    <div>
                        {rowsd.map((row4) => (
                            <R4ow key={row4} row4={row4} />
                        ))}
                        <button className='but' onClick={addRowd}>Add Backup Channel</button>
                    </div>
                    <div>
                        {rowse.map((row5) => (
                            <R5ow key={row5} row5={row5} />
                        ))}
                        <button className='but' onClick={addRowe}>Add Backup Channel</button>
                    </div>
                </form>
                <div className='bro'>
                    <span><Button variant="outlined" href="../Upload.js">Back</Button></span>
                    <span> <h3 className='can'>Cancel Montage</h3></span>
                    <span><Button variant="contained" href="../Preview.js">
                        Next
                    </Button></span>
                </div>
            </div>
        </>
    )
}
const Row = ({ row1 }) => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a>
                            C3-A2
                        </a></li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}
                                                > {channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a>+ Add Backup Channel</a></li>
                    </ul>
                </nav>
            </div >
        </>
    );
};
const R2ow = ({ row2 }) => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a>
                            C4-A1
                        </a></li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a>+ Add Backup Channel</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
const R3ow = ({ row3 }) => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a>
                            EOGL-A2
                        </a></li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a>+ Add Backup Channel</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
const R4ow = ({ row4 }) => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a>
                            EOGR-A1
                        </a></li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a>+ Add Backup Channel</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
const R5ow = ({ row5 }) => {
    return (
        <>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a>
                            EMG
                        </a></li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a><div>
                            <>
                                <div>
                                    <div><label>Select Channel</label>
                                        <select>
                                            {data.channels.map((channels) => {
                                                return <option key={channels.id} value={channels.id}>{channels.name}</option>;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        </div></a>
                        </li>
                        <li><a>+ Add Backup Channel</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Testmap;