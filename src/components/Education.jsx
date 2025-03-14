import React from "react";

const educationData = [
  {
    title: "Bachelor's Degree in Business Administration",
    institution: "Anadolu University",
    duration: "2021 - 2025",
  },
  {
    title: "Bachelor's Degree in Civil Engineering",
    institution: "Pamukkale University",
    duration: "2014 - 2018",
  },
  {
    title: "High School Diploma",
    institution: "İzmir Atatürk High School",
    duration: "2010 - 2014",
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-center text-3xl font-medium mb-8">Education</h2>
      <div className="relative border-l border-gray-400 pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className="relative mb-8 ml-4">
            {/* nokta */}
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[46px] top-2"></div>
            <h3 className="text-lg font-semibold">{edu.title}</h3>
            <p className="text-sm text-gray-600">{edu.institution}</p>
            <p className="text-xs text-gray-500">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
