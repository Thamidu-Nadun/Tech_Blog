import React from 'react';

const AdminCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-400">
            Total Articles
          </h2>
          <p className="text-3xl font-bold text-white">1,234</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-400">New Comments</h2>
          <p className="text-3xl font-bold text-white">56</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-400">Total Users</h2>
          <p className="text-3xl font-bold text-white">8,765</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-400">Growth Rate</h2>
          <p className="text-3xl font-bold text-green-500">+12.5%</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCards;
