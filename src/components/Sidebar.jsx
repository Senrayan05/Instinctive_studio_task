import React from "react";

const menuItems = [
  { name: "Dashboard", imgSrc: "/dashboard.png" },
  { name: "Student", imgSrc: "/student.png" },
  { name: "Chapter", imgSrc: "/chapter.png" },
  { name: "Help", imgSrc: "/help.png" },
  { name: "Reports", imgSrc: "/reports.png" },
  { name: "Settings", imgSrc: "/settings.png" },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-700 flex flex-col">

      <div className="p-6 text-center text-2xl font-bold border-b border-gray-300 bg-white">
        <img
          src="/logo.png"
          alt="company logo"
          className="mx-auto w-full h-20 object-contain"
        />
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 px-6 py-3 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded-lg"
            >
              <img src={item.imgSrc} alt={item.name} className="w-6 h-6" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
