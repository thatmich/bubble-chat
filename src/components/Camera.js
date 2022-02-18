import React, { useEffect } from 'react';
import './Camera.css';

function Camera() {
  useEffect(() => {
    const constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
      const video = document.querySelector("video");
  
      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }).catch(function (err) {
      console.log(err.name + ": " + err.message);
    }); // always check for errors at the end.
  }, []);
  return (
    <div id="camera-container">
      <video className="userCamStream" autoPlay={true} controls={false} id="videoElement"></video>
    </div>
  );
}

export default Camera;