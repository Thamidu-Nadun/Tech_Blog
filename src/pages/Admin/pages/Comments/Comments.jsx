import React from 'react';

const comments = [
  {
    id: 1,
    author: 'John Doe',
    email: 'john.doe@example.com',
    comment: 'This is a great article! Thanks for sharing.',
    date: '2025-07-15',
    status: 'Approved',
  },
  {
    id: 2,
    author: 'Jane Smith',
    email: 'jane.smith@example.com',
    comment: 'I have a question about the second paragraph. Can you elaborate?',
    date: '2025-07-16',
    status: 'Pending',
  },
  {
    id: 3,
    author: 'Sam Wilson',
    email: 'sam.wilson@example.com',
    comment: 'I found a typo in the conclusion.',
    date: '2025-07-17',
    status: 'Approved',
  },
  {
    id: 4,
    author: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    comment: 'This was very helpful. Looking forward to more content.',
    date: '2025-07-18',
    status: 'Pending',
  },
];

function Comments () {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Comments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                ID
              </th>
              <th className="w-2/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Author
              </th>
              <th className="w-4/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Comment
              </th>
              <th className="w-2/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Date
              </th>
              <th className="w-1/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="w-2/12 px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {comments.map (comment => (
              <tr key={comment.id}>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  {comment.id}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  {comment.author}
                  <div className="text-xs text-gray-500">{comment.email}</div>
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-sm text-gray-500">
                  {comment.comment}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                  {comment.date}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${comment.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                  >
                    {comment.status}
                  </span>
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2 sm:mr-4">
                    Approve
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Comments;
