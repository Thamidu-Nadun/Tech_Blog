import React from 'react';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';

function Admin () {
  return (
    <div>
      <BreadCrumb
        prev_name="Dashboard"
        prev_link="/dashboard"
        next_name="/"
        next_link=""
      />
    </div>
  );
}

export default Admin;
