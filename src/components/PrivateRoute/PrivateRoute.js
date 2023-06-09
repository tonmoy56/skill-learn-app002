import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user}=useContext(UserContext)
     
        if(!user){
            return <Navigate to='/login'></Navigate>
        }
        return children
       
    
};

export default PrivateRoute;