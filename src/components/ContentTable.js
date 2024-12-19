import React from "react";

const ContentTable = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Content Management</h2>
      <table className="w-full text-sm text-gray-500">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3">Content Title</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Published Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4">Chapter 1 - Basics</td>
            <td className="px-6 py-4">Mathematics</td>
            <td className="px-6 py-4">2024-04-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
