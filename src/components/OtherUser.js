import React, { useContext, useState } from 'react';
import StoreContext from '../contexts/StoreContext';
import Camera from './Camera';
import './UserCircle.css';
//const defaultPic = "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=";

function OtherUser(props) {
    var imageLink = props.userData.imageUrl;
    var userName = props.userData.name;
    const [hovering, setHover] = useState(false);
    const [userPosition, setPosition] = useState(
        {
            x: props.userData.xCoord,
            y: props.userData.yCoord,
        }
    );
    const { userInfo, setUserInfo} = useContext(StoreContext);
    
    // temp
    const [videoOn, setVideo] = useState(false);

    var timeoutUnhover;
    const onHover = () => {
        setHover(true);
        clearTimeout(timeoutUnhover);
    }
    const onUnHover = () => {
        timeoutUnhover = setTimeout(function () { setHover(false) }, 1000);
    }
    const makeRoom = () =>{
        let deltaX = (userInfo.x - userPosition.x);
        let deltaY = (userInfo.y - userPosition.y);
        let theta = Math.abs(Math.atan(deltaX/deltaY));
        let h = 90;
        let setX, setY;

        if(deltaX >=0){
            setX = userInfo.x - h*Math.sin(theta);
        }
        else{
            setX = userInfo.x + h*Math.sin(theta);
        }

        if(deltaY >=0){
            setY = userInfo.y - h*Math.cos(theta);
        }
        else{
            setY = userInfo.y + h*Math.cos(theta);
        }

        setPosition(
            {
                x: setX,
                y: setY,
            }
        )
        clearTimeout(timeoutUnhover);
        setHover(false);
        setVideo(true);
    }
    return (
        <div
            className='OtherUser'
            style={{ position: 'absolute', transform: `translate(${userPosition.x}px, ${userPosition.y}px)`, maxWidth: "5em" }}
            onMouseEnter={onHover}
            onMouseLeave={onUnHover}
        >
            <img
                className="userPicture"
                alt={userName}
                src={imageLink}
            ></img>
            
            {videoOn ? <Camera id="userCamera" /> : <div/>}
            {hovering ? (
                <div className="hoverModal"
                    onMouseEnter={onHover}
                >
                    <div className = "hoverName">
                        {userName}
                    </div>
                    <button className="hoverBtn">
                        Chat
                    </button>
                    <button className="hoverBtn" onClick={makeRoom}>
                        Create Room
                    </button>
                </div>
            ) : (<div />)}

            
            

        </div>
    );
}


export default OtherUser;