import React from 'react';
import './Side.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import credit from '../../Images/credit.png';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const Side = () => {
    return (
        <div>
            <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
                <Sidebar className='Sidebar' backgroundColor="#04273A" style={{ height: "100vh" }}>
                    <Menu>
                        <MenuItem
                            icon={<MenuOutlinedIcon />}
                            style={{ textAlign: "center", color: "White" }}
                        >
                            {" "}
                            < h2 > React Test </h2>
                        </MenuItem>

                        <MenuItem icon={<GridViewIcon />} style={{ color: "White" }}>Dashboard</MenuItem>
                        <MenuItem icon={<NoteAddOutlinedIcon />} style={{ color: "White" }}>Montages</MenuItem>
                        <MenuItem icon={<MonetizationOnOutlinedIcon />} style={{ color: "White" }}>Credits</MenuItem>
                    </Menu>
                    <img className='credit' src={credit} />
                </Sidebar >
            </div>

        </div >
    )

}

export default Side;
