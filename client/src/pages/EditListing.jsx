import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function EditListing() {
  //   console.log(formdata);

  const { currentUser } = useSelector((state) => state.user);
  //   const { currentListing } = useSelector((state) => state.listing);
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    company_name: "",
    college_name: "",
    doi: 50,
    description: "",
    tips: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchListing = async () => {
      console.log("hello from fetching");
      try {
        const res = await fetch(`/api/listing/list/${id}`);
        const data = await res.json();
        // console.log(data);

        setformdata({
          name: data.name,
          company_name:data.company_name,
          college_name:data.college_name,
          doi:data.doi,
          description: data.description,
          tips:data.tips
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchListing();
  }, [id]);
  //   console.log(formdata);

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/listing/update/${id}`, {
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
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Edit Listing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
        <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            value={formdata.name}
            onChange={handleChage}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 rounded-lg"
            id="company_name"
            maxLength="62"
            minLength="10"
            required
            value={formdata.company_name}
            onChange={handleChage}
          />
          <input
          type="date"
          placeholder="Date of Interview"
          className="border p-3 rounded-lg mt-3"
          id="doi"
          required
          value={formdata.doi}
          onChange={handleChage}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            value={formdata.description}
            onChange={handleChage}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            value={formdata.description}
            onChange={handleChage}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <button
            disabled={loading || uploading}
            className="bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80  text-white uppercase"
          >
            {loading ? "Editing..." : "Edit Listing"}
          </button>
          {error && <p className="text-red-700 text-center">{error}</p>}
        </div>
      </form>
    </main>
  );
}

export default EditListing;
