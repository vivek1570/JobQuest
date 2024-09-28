import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowList() {
  const { id } = useParams();
  const [expr, setExpr] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetch(`/api/listing/list/${id}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          return;
        }
        setExpr(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetching();
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold">
        <h1>Something went wrong. Please try again later.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company image section */}
        <div className="w-full md:w-1/3">
          <img
            src={expr.companyImageUrl || 'https://via.placeholder.com/400'}
            alt={`${expr.company_name} logo`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details section */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">{expr.name}</h2>
          <p className="text-lg text-gray-600 italic">{expr.company_name}</p>
          <p className="text-gray-700">{expr.description}</p>

          {/* Additional info */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-green-100 text-green-700 text-sm font-semibold py-1 px-3 rounded-full">
              {expr.doi || 'Date of Interview: Not provided'}
            </span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold py-1 px-3 rounded-full">
              {expr.college_name || 'College: Not provided'}
            </span>
          </div>

          {/* Tips section */}
          {expr.tips && (
            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-800">Tips:</h3>
              <p className="text-gray-600 mt-2">{expr.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
