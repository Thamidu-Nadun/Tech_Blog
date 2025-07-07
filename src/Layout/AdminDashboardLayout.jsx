import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';

function AdminDashboardLayout () {
  const [isSideBarOpen, setIsSideBarOpen] = useState (true);
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* SideBar */}
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {/* Main Content */}
      <div
        className={`${isSideBarOpen ? 'ml-64' : 'ml-24'} transition-all duration-300 ease-in-out`}
      >
        <header className="w-screen h-12 bg-gradient-to-r from-gray-800 to-gray-600" />
        <div className="h-screen w-full m-4 relative">
          <Outlet />
        </div>
      </div>
      <div className="absolute bottom-0 footer border-t border-orange-800/50 w-screen h-8" />
    </div>
  );
}

export default AdminDashboardLayout;
