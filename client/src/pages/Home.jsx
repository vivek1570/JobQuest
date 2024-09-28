// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import { Navigation } from "swiper/modules";
// import estatepic from "../assets/images.js";
// import { useEffect, useState } from "react";
// import Listings from "../components/Listings.jsx";
// import { Link } from "react-router-dom";

// function Home() {
//   SwiperCore.use([Navigation]);
//   // const [offerData, setOfferData] = useState([]);
//   const [rentData, setRentData] = useState([]);
//   const [saleData, setSaleData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/listing/get?offer=true&limit=4");
  //     const data = await res.json();
  //     setOfferData(data);
  //   };
  //   const fetchData1 = async () => {
  //     const res = await fetch("/api/listing/get?type=rent&limit=4");
  //     const data = await res.json();
  //     setRentData(data);
  //   };
  //   const fetchData2 = async () => {
  //     const res = await fetch("/api/listing/get?type=sale&limit=4");
  //     const data = await res.json();
  //     setSaleData(data);
  //   };
  //   fetchData1();
  //   fetchData2();
  //   fetchData();
  // }, []);
  // console.log(offerData);

//   return (
//     <div>
//       {/* header section */}
//       <div className="max-w-6xl mx-auto px-3 py-28">
//         <div className="flex flex-col gap-6">
//           <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
//             Find Your Next <span className="text-slate-500">Perfect</span>{" "}
//             <br />
//             place with ease
//           </h1>
//           <div className="text-gray-400 text-xs sm:text-sm">
//             Vivek Estate will help you find your home fast, easy and
//             comfortable.
//             <br />
//             Our expert support are always available.{" "}
//           </div>
//           <a className="text-blue-900 font-semibold" href="/search">
//             Get Started...
//           </a>
//         </div>
//       </div>
//       {/* swiper section */}
//       <Swiper navigation>
//         {estatepic.imageUrls.map((url) => {
//           return (
//             <SwiperSlide key={url}>
//               <div
//                 className="h-[550px]"
//                 style={{
//                   background: `url(${url}) center no-repeat`,
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>

//       {/* List  section  for offer*/}
//       <div className="max-w-6xl mx-auto px-3 py-20">
//         <h1 className="text-slate-600 font-semibold text-2xl">Recent Offers</h1>
//         <Link to={"/search?offer=true"}>
//           <p className="mb-5 text-sm hover:underline text-blue-800">
//             Show More offers...
//           </p>
//         </Link>
//         <div className="flex flex-wrap gap-8">
//           {offerData.map((listing) => (
//             <Listings key={listing._id} listing={listing} />
//           ))}
//         </div>
//       </div>

//       {/* List  section  for type rent*/}

//       <div className="max-w-6xl mx-auto px-3 py-20">
//         <h1 className="text-slate-600 font-semibold text-2xl">
//           Recent places for rent
//         </h1>
//         <Link to={"/search?type=rent"}>
//           <p className="mb-5 text-sm hover:underline text-blue-800">
//             Show more places for rent...
//           </p>
//         </Link>
//         <div className="flex flex-wrap gap-8">
//           {rentData.map((listing) => (
//             <Listings key={listing._id} listing={listing} />
//           ))}
//         </div>
//       </div>

//       {/* List  section  for type sale*/}

//       <div className="max-w-6xl mx-auto px-3 py-20">
//         <h1 className="text-slate-600 font-semibold text-2xl">
//           Recent places for sale
//         </h1>
//         <Link to={"/search?type=sale"}>
//           <p className="mb-5 text-sm hover:underline text-blue-800">
//             Show more places for sale...
//           </p>
//         </Link>
//         <div className="flex flex-wrap gap-8">
//           {saleData.map((listing) => (
//             <Listings key={listing._id} listing={listing} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {

  const [experiences, setExperiences] = useState([
    {
      _id: '1',
      company_name: 'Google',
      description: 'The Google interview process was challenging but rewarding. It started with an online assessment, followed by 3 technical interviews focusing on data structures, algorithms, and system design.',
    },
    {
      _id: '2',
      company_name: 'Amazon',
      description: 'Amazon’s interview was a mix of behavioral and technical questions. They emphasized their leadership principles and tested my problem-solving skills through coding problems and system design questions.',
    },
    {
      _id: '3',
      company_name: 'Microsoft',
      description: 'The Microsoft interview focused on problem-solving, with coding questions in data structures and algorithms, followed by a design discussion. There was a strong emphasis on collaboration and clear communication.',
    },
    {
      _id: '4',
      company_name: 'Meta',
      description: 'The interview consisted of coding challenges related to graphs and trees. Additionally, there was a product design interview where I had to design a scalable system for millions of users.',
    },
    {
      _id: '5',
      company_name: 'Tesla',
      description: 'Tesla’s interview process involved a technical round focusing on problem-solving and a case study round where I had to present a solution to a real-world engineering problem Tesla is facing.',
    }
  ]);



  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">JobQuest</span>
        </h1>
        <p className="text-xl">
          "Unlock Your Future by Learning from Real Interview Experiences!"
        </p>
        <Link to="/search">
          <button className="mt-8 bg-yellow-400 text-blue-900 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
            Explore Interviews
          </button>
        </Link>
      </header>
      
      {/* Quotes Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          "Your Dream Job is Just an Interview Away"
        </h2>
        <p className="text-gray-500 text-lg">
          Read through real-life interview experiences and get insights that can
          guide you to your dream job.
        </p>
      </section>

      {/* Interview Experiences Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Featured Interview Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {exp.company_name}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4">
                {exp.description}
              </p>
              <Link
                to={`/experience/${exp._id}`}
                className="text-blue-700 hover:underline font-medium"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-lg font-medium">
          "Success starts with the right opportunity, and the journey begins
          with the right preparation."
        </p>
        <Link to="/about" className="text-yellow-400 hover:underline mt-4">
          Learn More About Us
        </Link>
      </footer> */}
      <Footer/>
    </div>
  );
}

