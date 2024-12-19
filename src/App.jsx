import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import HeaderBar from "./components/HeaderBar";
import StudentTable from "./components/StudentTable";

const App = () => {
  const [activePage, setActivePage] = useState("students"); 

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
        <div className="flex flex-col w-full bg-gray-50">
        <Topbar />
        <HeaderBar activePage={activePage} />

        <div className="flex-1 p-6 overflow-auto">
          {activePage === "students" && <StudentTable />}
        </div>
      </div>
    </div>
  );
};

export default App;