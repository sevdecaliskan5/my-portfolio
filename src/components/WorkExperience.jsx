import React from "react";

const workExperienceData = [
  {
    title: "Front-End Developer Trainee",
    company: "Workintech",
    duration: "12.2024 - 04.2025",
    details: [
      "Completed 45 coding projects using HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS.",
      "Gained experience in responsive web design, performance optimization, and user experience‑focused development.",
      "Worked on test automation and learned about software testing processes.",
      "Successfully completed 12 assessments.",
    ],
  },

  {
    title: "Site Engineer",
    company: "Hakbey İnşaat",
    duration: "12.2022 - 02.2024",
    description:
      "Worked for a subcontractor with a team of approximately 500 workers in the T.C. Ministry of Health Public-Private Partnership Program - 2060-Bed İzmir Bayraklı City Hospital Construction Project, overseeing finishing works. Responsibilities included: Managing the construction of metal ceilings, gypsum board ceilings and walls, seismic ceiling applications, structural reinforcements, welding works, ceramic coatings, plastering, and painting. Team management, coordination, and defining production processes. Preparing attendance sheets, official reports, and completing progress payment files.",
  },

  {
    title: "Site Manager",
    company: "Proface Makine İnşaat",
    duration: "04.2021 - 12.2022",
    description:
      "Supervised all construction stages, including excavation, foundation, structural, and finishing works on multiple projects. Managed project scheduling, subcontractors, quantity surveying, material procurement, and recorded invoices in the 'Luca' accounting system.",
  },
  {
    title: "Civil Engineer",
    company: "Adalar İnşaat Mimarlık",
    duration: "08.2020 - 01.2021",
    description:
      "Responsible for drafting structural projects, inspecting implementation, site measurements for permits, converting drawings in AutoCAD, and handling municipal documentation processes.",
  },
];

const WorkExperience = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-center text-3xl font-medium mb-8">Work Experience</h2>
      <div className="relative border-l border-gray-400 pl-6">
        {workExperienceData.map((work, index) => (
          <div key={index} className="relative mb-8 ml-4">
            {/* nokta */}
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[46px] top-2"></div>

            <h3 className="text-lg font-semibold">{work.title}</h3>
            <div className="items-center flex">
              <p className="text-m flex text-gray-400">{work.company}</p> - {" "}
              <p className="text-xs flex text-gray-600"> {work.duration}</p>
            </div>
            {work.details ? (
              <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                {work.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 mt-2">{work.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
