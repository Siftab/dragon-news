import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const PrivateRouter = ({children}) => {
    const location = useLocation();
   
    console.log(location)
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center h-[100vh]"><RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
</div>
    }

  return user? children:
  <Navigate state={location.pathname} to='/login'></Navigate>
// if(user){
//     return children;
// }
// return    <Navigate to='/login'></Navigate>

};

export default PrivateRouter;