import React from 'react';
import useAuth from '../hooks/useAuth';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({children, requiredRoles = []}) => {
  const {user} = useAuth ();

  if (!user) return <Navigate to="/login" replace />;

  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.some (role =>
      user.roles.includes (role)
    );
    if (!hasRequiredRole) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
