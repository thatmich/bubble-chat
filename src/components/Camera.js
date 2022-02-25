import React, { useContext, useEffect } from 'react';
import Webcam from 'react-webcam';
import StoreContext from '../contexts/StoreContext';
import './Camera.css';

// function Camera() {
//   const { av_settings } = useContext(StoreContext);
//   const { isCameraOn, isMicOn, isBroadcasting } = av_settings;
//   var videoSettings;

//   useEffect(() => {
//     if(isCameraOn){
//       videoSettings = { width: 1280, height: 720 };
//     }
//     else{
//       videoSettings = false;
//     }
//     const constraints = { audio: isMicOn, video: videoSettings };
//     // const constraints = { audio: true, video: { width: 1280, height: 720 } };
//     navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
//       const video = document.querySelector("video");

//       video.srcObject = mediaStream;
//       video.onloadedmetadata = function (e) {
//         video.play();
//       };
//     }).catch(function (err) {
//       console.log(err.name + ": " + err.message);
//     }); // always check for errors at the end.
//   }, [av_settings]);
//   return (
//     <div id="camera-container">
//       <video className="userCamStream" autoPlay={true} controls={false} id="videoElement"></video>
//     </div>
//   );
// }

function Camera() {
  const { av_settings } = useContext(StoreContext);
  const { isCameraOn, isMicOn, isBroadcasting } = av_settings;
  const videoConstraints = {

  }
  return (
    <div>
      {isCameraOn ? (<div id="camera-container">
        <Webcam className="userCamStream" audio={false} mirrored={true} />
      </div>) : (<div/>)}
    </div>

  )
}

export default Camera;