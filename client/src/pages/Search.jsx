import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setsearchTerm] = useState("");
  const [experiences, setexperiences] = useState({});

  const handleOnclick = async () => {
    console.log(searchTerm);
    try {
      const res = await fetch(`/api/listing/get?searchTerm=${searchTerm}`);
      const data = await res.json();
      setexperiences(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Search Listings</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        placeholder="Enter search term..."
        className="w-full max-w-sm p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleOnclick}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Search
      </button>
      {experiences &&
        experiences.length > 0 &&
        experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {exp.company_name}
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4">{exp.description}</p>
            <Link
              to={`/listing/${exp._id}`}
              className="text-blue-700 hover:underline font-medium"
            >
              Read More
            </Link>
          </div>
        ))}
    </div>
  );
}
