import React, { useState} from 'react';
import './UserCircle.css';
//const defaultPic = "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=";

function OtherUser(props){
    var imageLink = props.userData.imageUrl;
    var userName = props.userData.name;
    const [userPosition, setPosition] = useState(
        {
            x: props.x,
            y: props.y,
        }
    );
    return(
            <div 
                className='OtherUser'
                style={{position:'absolute', transform: `translate(${userPosition.x}px, ${userPosition.y}px)`, maxWidth:"5em"}}
            >
                <img 
                    className = "userPicture"
                    alt={userName} 
                    src={imageLink}
                ></img>

            </div>
    );
}


export default OtherUser;