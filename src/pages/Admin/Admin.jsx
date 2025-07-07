import React from 'react';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';

function Admin () {
  return (
    <div className="w-full h-full p-4">
      <div className="relative">
        <BreadCrumb
          prev_name="Dashboard"
          prev_link="/dashboard"
          next_name="/"
          next_link=""
        />
      </div>
    </div>
  );
}

export default Admin;
