import React, { useContext, useState } from 'react';
import './AudioControl.css';
import Camera from './Camera.js';
import microphoneLogo from '../images/microphone.png';
import muteLogo from '../images/mutemicrophone.png';
import videoLogo from '../images/video-camera.png';
import noVideoLogo from '../images/no-video.png';
import broadcastLogo from '../images/broadcast.png';
import StoreContext from '../contexts/StoreContext';


function AudioControl() {
  const { av_settings, setAV } = useContext(StoreContext);
  const { isCameraOn, isMicOn, isBroadcasting } = av_settings;
  const [videoLogoLocation, setVideoLocation] = useState(videoLogo);
  const [audioLogoLocation, setAudioLocation] = useState(microphoneLogo);

  const handleCamera = () =>{
    if(isCameraOn){
      setVideoLocation(noVideoLogo);
      setAV({isCameraOn: false, isMicOn: isMicOn, isBroadcasting: isBroadcasting});
    }
    else{
      setVideoLocation(videoLogo);
      setAV({isCameraOn: true, isMicOn: isMicOn, isBroadcasting: isBroadcasting});
    }
    console.log(av_settings);
  }

  const handleAudio = () =>{
    if(isMicOn){
      setAudioLocation(muteLogo);
      setAV({isCameraOn: isCameraOn, isMicOn: false, isBroadcasting: isBroadcasting});
    }
    else{
      setAudioLocation(microphoneLogo);
      setAV({isCameraOn: isCameraOn, isMicOn: true, isBroadcasting: isBroadcasting});
    }
    console.log(av_settings);
  }


  return (
    <div className='AudioControlBar'>
      <nav className='audio_control_nav'>
        <ul className='buttons_bar'>
          <li className='audio_control_item'>
            <button className="controlBtn" id="micButton" onClick={handleAudio}>
              <img className="buttonImg" src={audioLogoLocation}></img>
            </button>
          </li>
          <li className='audio_control_item'>
            <button className="controlBtn" id="videoButton" onClick={handleCamera}>
              <img className="buttonImg" src={videoLogoLocation}></img>
            </button>
          </li>
          {/* <li className='audio_control_item'>
            <button className="controlBtn" id="broadcastButton">
              <img className="buttonImg" src={broadcastLogo}></img>
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default AudioControl;
