import React, { useEffect } from 'react';
import { useAuth } from '../../store/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    toast.success('Logout successful');
    LogoutUser();
   
  }, []);  

  return <Navigate to="/login" />;
};

export default Logout;
