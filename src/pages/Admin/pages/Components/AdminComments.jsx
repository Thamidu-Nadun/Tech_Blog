import React from "react";

const AdminComments = () => {
  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-white">Recent Comments</h2>
        <ul>
          <li className="border-b border-gray-700 py-2">
            <p className="text-gray-300">"This is a great article!"</p>
            <p className="text-sm text-gray-500">
              - John Doe on "The Future of AI"
            </p>
          </li>
          <li className="border-b border-gray-700 py-2">
            <p className="text-gray-300">
              "I have a question about the second paragraph."
            </p>
            <p className="text-sm text-gray-500">
              - Jane Smith on "History of Ancient Rome"
            </p>
          </li>
          <li className="py-2">
            <p className="text-gray-300">"Thanks for sharing!"</p>
            <p className="text-sm text-gray-500">
              - Alex Johnson on "10 Tips for Healthy Living"
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminComments;
