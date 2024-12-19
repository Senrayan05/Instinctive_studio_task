import React from "react";

const HeaderBar = ({ activePage }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 border-b">

      <div className="flex gap-4 items-center">
        <select
          className="px-3 py-2 border rounded-md text-gray-700 bg-gray-200"
        >
          <option>AY 2024-25</option>
          <option>AY 2023-24</option>
        </select>
        <select
          className="px-3 py-2 border rounded-md text-gray-700 bg-gray-200"
        >
          <option>CBSE 9</option>
          <option>CBSE 10</option>
        </select>
      </div>

      <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
        + Add New Student
      </button>
    </div>
  );
};

export default HeaderBar;
