// TO DO
// right click leads to video options
import React, { useState } from 'react';
import './UserCircle.css';
import Draggable from './Draggable.js';
import Camera from './Camera.js'
//const defaultPic = "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=";

function UserCircle(props) {
    // const { group, setGroup } = useState(null);
    const [userPos, setPos] = useState({
        x: props.info.x,
        y: props.info.y,
    });
    const skipCoef = 1;
    const [currentSkip, setSkip] = useState(0);
    const move = (newX, newY) => {
        if (newX !== undefined && newY !== undefined) {
            setPos({ x: newX, y: newY });
            setSkip(currentSkip +1);
            if(currentSkip === skipCoef){
                props.socket.emit("move", userPos);
                //console.log("move");
                setSkip(0);
            }
            
        }

    }
    const release = () => {
        props.socket.emit("move", userPos);
    }


    return (
        <Draggable x={userPos.x} y={userPos.y} onMove={move} onRelease={release}>
            <div className="UserCircle">
                <img
                    className="userPicture"
                    alt={props.info.name}
                    src={props.info.img}
                ></img>
                <Camera id="userCamera" />
            </div>
        </Draggable>
    );
}

export default UserCircle;