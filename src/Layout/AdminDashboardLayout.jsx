import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';

function AdminDashboardLayout () {
  const [isSideBarOpen, setIsSideBarOpen] = useState (true);
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <header
        className={`${isSideBarOpen ? 'ml-64' : 'ml-24'} absolute w-screen h-12 bg-gradient-to-r from-gray-800 to-gray-600`}
      />
      <div
        className={`${isSideBarOpen ? 'ml-64' : 'ml-24'} bg-gray-950/20 h-screen p-4 relative`}
      >
        <Outlet />
      </div>
      <div className="absolute bottom-0 footer border-t border-orange-800/50 w-screen h-8" />
    </div>
  );
}

export default AdminDashboardLayout;
