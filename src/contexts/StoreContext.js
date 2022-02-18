import React from 'react';

const StoreContext = React.createContext({
    userInfo: {},
    setUserInfo: (userInfo) => {},
});

export default StoreContext;
