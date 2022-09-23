import React, { useState } from 'react'
import userContext from './userContext';


const UserStateContext = (props) => {



    return (
        <userContext.Provider value={props}>{props.children}</userContext.Provider>
    )
}

export default UserStateContext;