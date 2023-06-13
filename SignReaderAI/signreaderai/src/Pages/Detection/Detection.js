import React from 'react'
import Webcam from "react-webcam";
const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    facingMode: "user",
};
const Detection = () => {
    return (
        <div>
            <Webcam videoConstraints={videoConstraints} />
        </div>
    )
}

export default Detection
