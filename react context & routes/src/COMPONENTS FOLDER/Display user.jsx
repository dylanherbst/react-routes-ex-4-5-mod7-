import React, { useContext } from 'react';
import { UserContext } from '../CONTEXT FOLDER/example user context';

const UserInfoDisplay = () => {
    const { userInfo } = useContext(UserContext)

    return (
        <div>
        <h3>User Preferences</h3>
        <p>Username: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
    </div>
    )
}

export default UserInfoDisplay