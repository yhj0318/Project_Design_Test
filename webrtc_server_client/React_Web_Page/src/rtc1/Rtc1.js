import React from 'react';

const Rtc1 = () => {
    return (
        <>
            <div>
                <video id="localVideo" autoplay width="480px"></video>
                <video id="remoteVideo" width="480px" autoplay></video>
            </div>
            <script src="/socket.io/socket.io.js"></script>
            <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
            <script src="./rtc.js"></script>
        </>
    );
};
  
export default Rtc1;