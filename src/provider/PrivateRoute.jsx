import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()
   
    if(loading){
        return <h1 className='text-center'><span className="loading loading-dots loading-xl my-30"></span></h1>
    }
    if(user && user.email){
       return children 
    }else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    
};

export default PrivateRoute;