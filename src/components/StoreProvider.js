import React, { useState } from 'react';
import StoreContext from '../contexts/StoreContext';

const defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

function StoreProvider(props) {
    const [userInfo, setUserInfo] = useState({ name: 'name', imageUrl: defaultImg, x: 800, y: 400});
    const [av_settings, setAV] = useState({isCameraOn: true, isMicOn: true, isBroadcasting: false});

    return (
        <StoreContext.Provider value={{
            userInfo,
            setUserInfo,
            av_settings,
            setAV
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;
