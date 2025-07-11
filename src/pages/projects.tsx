"use-client"
import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AppLayout } from "../components/AppLayout/AppLayout";
import Project from "../assets/PROJECT.svg";
import Project2 from "../assets/PROJECT2.svg";
const Projects= () => {
  const data = useStaticQuery(graphql`
    query {
      projectpic: file(relativePath: { eq: "projectpic.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      testimonal: file(relativePath: { eq: "testimonal.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

 
  const testimonal = getImage(data.testimonal);

  const projects = [
    {
      id: "1",
      title: "Learnóbot",
      description:
        "Lorem ipsum dolor sit amet consectetur. Gravida cursus suspendisse porttitor amet diam. Aliquam in aliquam ac elementum amet nisi non sed. Aliquet ullamcorper facilisis posuere tempor. Ac a et habitant quis estas molesuada.",
      image: "/images/project1.jpg",
    },
    {
      id: "2",
      title: "Learnóbot",
      description:
        "Lorem ipsum dolor sit amet consectetur. Gravida cursus suspendisse porttitor amet diam. Aliquam in aliquam ac elementum amet nisi non sed. Aliquet ullamcorper facilisis posuere tempor. Ac a et habitant quis estas molesuada.",
      image: "/images/project2.jpg",
    },
  ];

  const Testimonials = [
  {
    id: "1",
    name: "John Carter",
    title: "Founder & CEO at Innovexa",
    feedback:
      "Working with this team was a game-changer for our business. They understood our vision and delivered a polished product that exceeded expectations. Their attention to detail and communication were top-notch.",
    
  },
  {
    id: "2",
    name: "Mice Anders",
    title: "Chief Technology Officer at NexaCore",
    feedback:
      "Their technical expertise is outstanding. From UI/UX to backend architecture, everything was executed flawlessly. Our project was delivered on time and with exceptional quality.",
    
  },
  {
    id: "3",
    name: "Jennifer Lee",
    title: "Product Manager at BrightApps",
    feedback:
      "Absolutely loved working with them! They transformed our ideas into a functional, beautiful application. Their team was flexible, skilled, and incredibly easy to collaborate with.",
  
  },
];


  
 const [testimonials, setTestimonials] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  
    const handleDelete = (indexToDelete: number) => {
    const updated = testimonials.filter((_, i) => i !== indexToDelete);
    setTestimonials(updated);
    localStorage.setItem("testimonials", JSON.stringify(updated));

    // Reset selected index
    if (indexToDelete === selectedIndex) {
      setSelectedIndex(0);
    } else if (indexToDelete < selectedIndex) {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }
  };
  
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8">
          Our Projects
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center mb-6 gap-2">
          {["All", "Mobile Apps", "UI/UX", "CRM"].map((label) => (
            <button
              key={label}
              className="font-Quicksand text-[#4A4A4A] px-4 py-2 rounded-full text-[15px] font-[450px] hover:text-[#FFFFFF] hover:bg-[#821AEA] transition duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-6 cursor-pointer">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out animate-fadeIn"
            >
              <div className="relative flex-shrink-0">
                 <img
                        src={Project}
                        alt="Project"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                       <img
                        src={Project2}
                        alt="Project"
                        className="absolute top-4 left-4 right-4 bottom-4 object-contain p-2"
                      />

               
              </div>
              <div className="p-4">
                <h2 className="text-[32px] font-normal font-Outfit mb-2 text-[#393939]">
                  {project.title}
                </h2>
                <p className="font-Quicksand text-[#4A4A4A] text-[15px] font-[450px] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-Quicksand text-[#4A4A4A] text-[15px] font-[450px] px-2 py-1 rounded-full">
                    UI/UX
                  </span>
                  <span className="font-Quicksand text-[#4A4A4A] text-[15px] font-[450px] px-2 py-1 rounded-full">
                    Back-end
                  </span>
                </div>
                <a
                  href="#"
                  className="text-[#821AEA] font-Quicksand font-semibold text-[15px] hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto pt-10">
          <h1 className="text-[32px] font-medium font-Outfit text-[#000000] mb-8">
            Testimonials
          </h1>
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Testimonial Cards */}
            <div className="flex flex-col gap-1">
              {Testimonials.map((t,index) => (
                <div
                  key={t.id}
                    onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer bg-white w-full md:w-[500px] rounded-lg shadow-md p-4 border-l-2 border-purple-500 transform hover:scale-105 transition duration-300 ease-in-out animate-fadeIn flex items-start ${
                index === selectedIndex
                ? "bg-purple-300 border-purple-500"
                : "bg-white border-gray-300"
            }`}
                >
                  <div className="mr-4">
                    {testimonal && (
                      <GatsbyImage
                        image={testimonal}
                        alt="Testimonial"
                        className="bg-white"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-[17px] font-medium font-Outfit text-[#000000]">
                          {t.name}
                        </h3>
                        <p className="text-[15px] font-medium font-Outfit text-[#4A4A4A]">
                          {t.title}
                        </p>
                      </div>
                       {/* <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-purple-600 text-sm hover:text-red-700"
                title="Delete testimonial"
              >
                ❌
              </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Paragraph */}
            <div className="w-full sm:w-[200px] lg:w-[680px]">
              <p className="font-Quicksand text-[#4A4A4A] lg:text-[18px] sm:text[13px] md:[13px] font-medium border border-[#E5E5E5]">
         {Testimonials[selectedIndex]?.feedback}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
