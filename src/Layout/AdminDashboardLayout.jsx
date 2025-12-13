import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";

function AdminDashboardLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 774) {
      setIsSideBarOpen(false);
    } else {
      setIsSideBarOpen(true);
    }
  });
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      {/* SideBar */}
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${isSideBarOpen ? "ml-64" : "ml-10 md:ml-24"}`}
      >
        <header className="w-screen h-12 bg-gray-800" />
        <div className="h-screen w-full m-4 px-4 relative ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
