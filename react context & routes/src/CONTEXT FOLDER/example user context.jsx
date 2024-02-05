import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState({
        name: 'name',
        email: 'youremail@email.com'
    })

    const updateHandler = (newInfo) =>{
        setUserInfo({...userInfo, ...newInfo});
    }

    return(
        <UserContext.Provider value={{userInfo, updateHandler}}>
{children}
        </UserContext.Provider>
    )
}

