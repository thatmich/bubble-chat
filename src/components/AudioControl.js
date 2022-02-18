import React, { useState } from 'react';
import './AudioControl.css';
import Camera from './Camera.js';
import microphoneLogo from '../images/microphone.png';
import videoLogo from '../images/video-camera.png';
import noVideoLogo from '../images/no-video.png';
import broadcastLogo from '../images/broadcast.png';


function AudioControl(props) {
  const [isCameraOn, setCamera] = useState(true);
  const [isBroadcasting, setBroadcast] = useState(false);
  const [isMicOn, setMic] = useState(false);

  const [videoLogoLocation, setVideoLocation] = useState(videoLogo);

  const handleCamera = () =>{
    if(isCameraOn){
      setVideoLocation(noVideoLogo);
    }
    else{
      setVideoLocation(videoLogo);
    }
    setCamera(!isCameraOn);
  }


  return (
    <div className='AudioControlBar'>
      <nav className='audio_control_nav'>
        <ul className='buttons_bar'>
          <li className='audio_control_item'>
            <button className="controlBtn" id="micButton">
              <img className="buttonImg" src={microphoneLogo}></img>
            </button>
          </li>
          <li className='audio_control_item'>
            <button className="controlBtn" id="videoButton">
              <img className="buttonImg" src={videoLogoLocation} onClick={handleCamera}></img>
            </button>
          </li>
          <li className='audio_control_item'>
            <button className="controlBtn" id="broadcastButton">
              <img className="buttonImg" src={broadcastLogo}></img>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AudioControl;
