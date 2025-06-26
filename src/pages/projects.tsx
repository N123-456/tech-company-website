import React from "react";
import "../styles/global.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AppLayout } from "../components/AppLayout/AppLayout";

const Projects = () => {
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
  }}`);
      const projectpic = getImage(data.projectpic);
      const testimonal = getImage(data.testimonal);
  const projects = [
    {
      id: "1",
      title: "Learnóbot",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida cursus suspendisse porttitor amet diam. Aliquam in aliquam ac elementum amet nisi non sed. Aliquet ullamcorper facilisis posuere tempor. Ac a et habitant quis estas molesuada.",
      image: "/images/project1.jpg"
    },
    {
      id: "2",
      title: "Learnóbot",
      description: "Lorem ipsum dolor sit amet consectetur. Gravida cursus suspendisse porttitor amet diam. Aliquam in aliquam ac elementum amet nisi non sed. Aliquet ullamcorper facilisis posuere tempor. Ac a et habitant quis estas molesuada.",
      image: "/images/project2.jpg"
    },
  ];
 const testimonials = [
    {
      id: "1",
      name: "Maria Slakovic",
      title: "CEO, Snitch.in",
      image: "/images/maria1.jpg",
      rating: "407×127",
    },
    {
      id: "2",
      name: "Maria Slakovic",
      title: "CEO, Snitch.in",
      image: "/images/maria2.jpg",
    
    },
    {
      id: "3",
      name: "Maria Slakovic",
      title: "CEO, Snitch.in",
      image: "/images/maria3.jpg",

    },
  ];

  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8">Our Projects</h1>
        <div className="flex justify-center mb-6 space-x-4">
          <button className="font-Quicksand text-[#4A4A4A] px-4 py-2 rounded-full text-[15px] font-[450px] hover:text-[#FFFFFF] hover:bg-[#821AEA] transition duration-200">
            All
          </button>
          <button className="font-Quicksand text-[#4A4A4A] px-4 py-2 rounded-full text-[15px] font-[450px] hover:text-[#FFFFFF] hover:bg-[#821AEA] transition duration-200">
            Mobile Apps
          </button>
          <button className="font-Quicksand text-[#4A4A4A] px-4 py-2 rounded-full text-[15px] font-[450px] hover:text-[#FFFFFF] hover:bg-[#821AEA] transition duration-200">
            UI/UX
          </button>
          <button className="font-Quicksand text-[#4A4A4A] px-4 py-2 rounded-full text-[15px] font-[450px] hover:text-[#FFFFFF] hover:bg-[#821AEA] transition duration-200">
            CRM
          </button>
        </div>
        <div className="flex flex-col items center gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" flex bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out animate-fadeIn"
            >
              <div className=" flex items-left gap-4">
                {projectpic && (
                <GatsbyImage
                  image={projectpic}
                  alt="Startups illustration"
                  className="bg-white"
                />
              )}
              </div>
              <div className="p-4">
                <h2 className="text-[32px] font-normal font-Outfit mb-2 text-[#393939]">{project.title}</h2>
                <p className="font-Quicksand text-[#4A4A4A] rounded-full text-[15px] font-[450px] mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  <span className="font-Quicksand text-[#4A4A4A] rounded-full text-[15px] font-[450px] px-2 py-1 rounded-full">
                    UI/UX
                  </span>
                  <span className="font-Quicksand text-[#4A4A4A] rounded-full text-[15px] font-[450px] px-2 py-1 rounded-full">
                    Back-end
                  </span>
                </div>
                <a
                  href="#"
                  className="text-[#821AEA] font-Quicksand font-semibold text-[15px] hover:underline "
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" max-w-7xl mx-auto pt-10">
        <h1 className="text-[32px] font-medium font-Outfit text-[#000000] mb-8">Testimonials</h1>
        <div className="flex flex-row items-start space-x-10">
        <div className="flex flex-col ">
         
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" bg-white w-[500px] rounded-lg shadow-md p-4 border-2 border-purple-300 transform hover:scale-105 transition duration-300 ease-in-out animate-fadeIn flex items-start"
            >
              <div className="mr-4">
                   {testimonal && (
                <GatsbyImage
                  image={testimonal}
                  alt="Startups illustration"
                  className="bg-white"
                />
              )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-[20px] font-medium font-Outfit text-[#000000]">{testimonial.name}</h3>
                    <p className="text-[15px] font-medium font-Outfit text-[#4A4A4A]">{testimonial.title}</p>
                  </div>
               
                </div>
               
              </div>
              
            </div>
            
          ))}
           
        </div>
        <div className="w-[680px]"> <p className="font-Quicksand text-[#4A4A4A] text-[15px] font-medium">"Lorem ipsum dolor sit amet consectetur. Mi suscipit consectetur lectus netus justo risus. Faucibus nulla nullam rhoncus lectus id turpis pulvinar vitae. Laoreet morbi justo at convallis. Fermentum nullam amet pulvinar nihil condimentum convallis. In incididunt libero moris metus laoreet duis cursus porttitor. Suspendisse tempor pellentesque amet arcu facilisis metus. Vulputate dictumst turpis leo quis. Urna risus augue ipsum pellentesque sit donec nisi. Imperdiet erat elit arcu vitae incididunt. Porttior aliquam nulla bibendum nulla eu aliquam nisi viverra. Aliquam ultricies vulputate gestas etiam in aliquam enim. Eget nibh sit ut suspendisse ut et ut in. Quis pharetra incididunt maecenass nibh bibendum proin et. Molestie suspendisse ultricier et cursus amet oenen. Rhoncus quisque lectus nisi gravida oenen mattis in. Tellus sapien a vulputate leo in. Nunc rutrum id lectus lorem libero vulputate."
    </p></div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Projects;