import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbstqugvqigwohpplsay.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtic3RxdWd2cWlnd29ocHBsc2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MTE3MjQsImV4cCI6MjA1MDA4NzcyNH0.WYWvePnG2A6HVv1PkGMOjGDJiG52eF1gzhb6GWIS-QI"; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString, includeTime = false) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };

    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    if (includeTime) {
      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formattedTime = new Date(dateString).toLocaleTimeString("en-US", timeOptions);
      return `${formattedDate} ${formattedTime}`;
    }
    return formattedDate;
  };

 
  const fetchStudents = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("students").select("*");

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setStudents(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Student List</h3>

    
      {loading ? ( <p>Loading...</p>
      ) : students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Student Name</th>
              <th className="p-2 border">Cohort</th>
              <th className="p-2 border">Courses</th>
              <th className="p-2 border">Date Joined</th>
              <th className="p-2 border">Last Login</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>

  {students.map((student, index) => (
    <tr key={index} className="bg-white border-b hover:bg-gray-100">
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4">{student.cohort}</td>

      <td className="px-6 py-4">{student.courses}</td>
      <td className="px-6 py-4">
        {new Date(student.date_joined).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td className="px-6 py-4">
        {new Date(student.last_login).toLocaleString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
      <td className="px-6 py-4">
        {student.status === "Active" ? "🟢 Active" : "🔴 Inactive"}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
};

export default StudentTable;
