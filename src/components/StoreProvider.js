import React, { useState } from 'react';
import StoreContext from '../contexts/StoreContext';

const defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

function StoreProvider(props) {
    const [userInfo, setUserInfo] = useState({ name: 'name', imageUrl: defaultImg });

    return (
        <StoreContext.Provider value={{
            userInfo,
            setUserInfo
        }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;
