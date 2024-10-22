import React, {useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import { loginContext } from '../context/context';

function ProtectedRoutes() {

    const [userStatus] = useState(localStorage.getItem('userData'));

    const userInfo = userStatus != null? true: false

    return userInfo ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
