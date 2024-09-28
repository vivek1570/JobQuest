import React from "react";

function About() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4 text-slate-700">About JobQuest</h1>
      <p className="mb-8 text-slate-500">
        JobQuest is a dedicated platform for users to share their job interview experiences, aiming to empower job seekers with valuable insights and knowledge. Our mission is to create a supportive community where individuals can learn from one another and enhance their interview preparation.
      </p>

      <h1 className="text-2xl font-bold mb-4 text-slate-700">
        About the JobQuest Platform
      </h1>
      <p className="text-slate-500">
        The JobQuest platform allows users to post their interview experiences, providing details about the companies, roles, and interview processes. Users can browse through various entries, read detailed descriptions, and gather tips to help them succeed in their own interviews. Built with modern technologies, JobQuest is designed to deliver a seamless user experience, ensuring that valuable information is easily accessible to all.
      </p>
      <a
        href="https://yourwebsite.com"  // Update with your actual website link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-600 text-white px-4 py-2 mt-8 rounded-md inline-block"
      >
        Visit JobQuest
      </a>
    </div>
  );
}

export default About;
