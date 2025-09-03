import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="font-extrabold  text-3xl text-center underline p-4">About Us</h1>
      <p className="text-center p-4">
        We are a software company. We focus in Full responsive website design.
        We provide different services like <span className="text-green-300">Website Development, </span>{" "}
        <span>Graphics desigining,</span> <span className="text-red-700">App development,</span>{" "}
        <span className="text-blue-300">Logo designing </span>
      </p>
    </div>
  );
};

export default About;
