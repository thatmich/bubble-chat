// TO DO
// right click leads to video options
import React, { useState, useContext } from 'react';
import './UserCircle.css';
import Draggable from './Draggable.js';
import Camera from './Camera.js'
import StoreContext from '../contexts/StoreContext';
//const defaultPic = "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=";

function UserCircle(props) {
    const { userInfo, setUserInfo} = useContext(StoreContext);
    const { imageUrl, name} = userInfo;
    const { group, setGroup } = useState(null);

    const move = (newX, newY) => {
        if(group == null){
            setUserInfo({ ...userInfo, x: newX, y: newY });
        }
        // console.log('' + userPosition.x + ' ' + userPosition.y)
    }

    return (
        <Draggable x={userInfo.x} y={userInfo.y} onMove={move}>
            <div className="UserCircle">
                <img
                    className="userPicture"
                    //alt={userName} 
                    src={imageUrl}
                ></img>
                <Camera id="userCamera" />
            </div>
        </Draggable>
    );
}

export default UserCircle;