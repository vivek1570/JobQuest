import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    company_name: "",
    college_name: "",
    doi: "",
    description: "",
    tips: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChage = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formdata,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError("error creating listing");
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-4xl font-semibold text-center text-gray-800 my-7">
        Create a Listing
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              maxLength="62"
              minLength="0"
              required
              value={formdata.name}
              onChange={handleChage}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="company_name">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              placeholder="Company Name"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              maxLength="62"
              minLength="0"
              required
              value={formdata.company_name}
              onChange={handleChage}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="doi">
              Date of Interview
            </label>
            <input
              type="date"
              id="doi"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              required
              value={formdata.doi}
              onChange={handleChage}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="college_name">
              College Name
            </label>
            <input
              type="text"
              id="college_name"
              placeholder="College Name"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              maxLength="62"
              minLength="0"
              required
              value={formdata.college_name}
              onChange={handleChage}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe your interview experience"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full h-32"
              required
              value={formdata.description}
              onChange={handleChage}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="tips">
              Tips
            </label>
            <textarea
              id="tips"
              placeholder="Tips for future candidates"
              className="mt-1 p-3 border border-gray-300 rounded-lg w-full h-32"
              value={formdata.tips}
              onChange={handleChage}
            />
          </div>
        </div>

        <div className="flex justify-end items-center space-x-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Listing"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
