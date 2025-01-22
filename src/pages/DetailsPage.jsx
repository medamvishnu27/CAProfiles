import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { fetchAccountantDetails } from "../api/FetchAccounts";

const DetailsPage = () => {
  // Extract the `id` from the route params
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchAccountantDetails(id);
        setAccount(data);
        setError(null);
      } catch (err) {
        setError("Failed to load account details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg text-white py-10">Loading...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  if (!account) {
    return (
      <div className="text-center text-red-500 py-10">
        Account details not found
      </div>
    );
  }

  const {
    name,
    image,
    about = {},
    id: accountId,
    rating,
    reviewCount,
    price,
    taskComplexity,
    deliveryTime,
    intro,
    testimonial = {},
  } = account;

  return (
    <section className="min-h-min flex font-Parkinsans items-center py-8 justify-center bg-gradient-to-r from-black to-[#2D3436] text-white px-4" >
      <div className="w-50% max-w-xl bg-white text-black rounded-lg shadow-lg  pt-10 p-10" >
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          {image && (
            <img
              src={image}
              alt={name}
              className="w-32 h-32 sm:w-40 sm:h-40  mx-auto shadow-md"
              style={{width:"1000px",height:"250px"}}
            />
          )}
        </div>

        {/* About Section */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <p>
              <span className="font-bold">From:</span> {about.from || "N/A"}
            </p>
            <p>
              <span className="font-bold">Partner Since:</span>{" "}
              {about.partnerSince || "N/A"}
            </p>
            <p className="col-span-2">
              <span className="font-bold">Description:</span>{" "}
              {about.description || "N/A"}
            </p>
          </div>
        </div>

        {/* Account Details */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <p>
              <span className="font-bold">ID:</span> {accountId}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {rating || "N/A"}
            </p>
            <p>
              <span className="font-bold">Review Count:</span>{" "}
              {reviewCount || "N/A"}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price || "N/A"}
            </p>
            <p>
              <span className="font-bold">Task Complexity:</span>{" "}
              {taskComplexity || "N/A"}
            </p>
            <p>
              <span className="font-bold">Delivery Time:</span>{" "}
              {deliveryTime || "N/A"}
            </p>
            <p className="col-span-2">
              <span className="font-bold">Introduction:</span> {intro || "N/A"}
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Testimonial</h2>
          <div className="text-gray-700">
            <p>
              <span className="font-bold">Text:</span>{" "}
              {testimonial.text || "N/A"}
            </p>
            <p>
              <span className="font-bold">Author:</span>{" "}
              {testimonial.author || "N/A"}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-end">
          <NavLink
            onClick={() => navigate(-1)}
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div class="bg-blue-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p class="translate-x-2">Go Back</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
