"use-client"
import * as React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TechStack from "./technologies";
import Heart from "../assets/HEART.svg";
import School from "../assets/SCHOOL.svg";
import Store from "../assets/STORE.svg";
import Shipping from "../assets/SHIPPING.svg";
import Manifac from "../assets/MANIFAC.svg";
import Agri from "../assets/AGRI.svg";

import Startup from "../assets/STARTUP.svg";
import Team from "../assets/TEAM.svg";
const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      startupImage: file(relativePath: { eq: "startup.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      companyImage: file(relativePath: { eq: "company.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
  
        angular: file(relativePath: { eq: "angular.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      flutter: file(relativePath: { eq: "flutter.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
    react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
    firebase: file(relativePath: { eq: "firebase.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      dolphin: file(relativePath: { eq: "dolphin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      salesforce: file(relativePath: { eq: "salesforce.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      next: file(relativePath: { eq: "next.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      Group: file(relativePath: { eq: "Group.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      laravel: file(relativePath: { eq: "laravel.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      js: file(relativePath: { eq: "js.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      ts: file(relativePath: { eq: "ts.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      microsoft: file(relativePath: { eq: "microsoft.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      c: file(relativePath: { eq: "c.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      dotnet: file(relativePath: { eq: "dotnet.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      mongodb: file(relativePath: { eq: "mongodb.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      microsoft2: file(relativePath: { eq: "microsoft2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      wordpress: file(relativePath: { eq: "wordpress.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
        
    }
  `);

  const startupImage = getImage(data.startupImage);
  const companyImage = getImage(data.companyImage);
  



  const techLogos = [
      { name: "angular", image: getImage(data.angular) },
      { name: "flutter", image: getImage(data.flutter) },
      { name: "react", image: getImage(data.react) },
      { name: "firebase", image: getImage(data.firebase) },
      { name: "dolphin", image: getImage(data.dolphin) },
      { name: "salesforce", image: getImage(data.salesforce) },
      { name: "next", image: getImage(data.next) },
      { name: "Group", image: getImage(data.Group) },
      { name: "laravel", image: getImage(data.laravel) },
      { name: "js", image: getImage(data.js) },
      { name: "ts", image: getImage(data.ts) },
      { name: "microsoft", image: getImage(data.microsoft) },
      { name: "c", image: getImage(data.c) },
      { name: "dotnet", image: getImage(data.dotnet) },
       { name: "mongodb", image: getImage(data.mongodb) },
      { name: "microsoft2", image: getImage(data.microsoft2) },
       
      { name: "gatsby", image: getImage(data.gatsby) },
      { name: "wordpress", image: getImage(data.wordpress) },
    ].filter(tech => tech.image);
  return (
    <div>
      <div className="pt-[40px] bg-white flex flex-col items-center justify-center px-10">
        <section className="w-full max-w-7xl py-10 animate-fade-in">
          <h2 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8  animate-slide-up">
            We offer our services to
          </h2>
          <div className="flex md:flex-col sm:flex-col lg:flex-row md-only:flex-col xs:flex-col xs-sm:flex-col justify-around items-center py-6 animate-fade-in md:space-y-4 space-y-6">
            <div className="w-[434px] h-[234px] border border-[#CCCCCC] hover:bg-purple-200 hover:shadow-md transition-all duration-300 animate-slide-up animate-delay-200">
            <div className="text-center  ">
              <img src={Startup} alt="Maintenance Icon" className="mx-auto mb-4"/>
              
              <h3 className="text-[20px] font-Outfit font-medium text-[#000000] mb-8">
                Startups
              </h3>
              <a
                href="#"
                className="text-[#821AEA] font-Quicksand text-[15px] font-normal"
              >
                View Services →
              </a>
            </div>
            </div>
            <div className="w-[434px] h-[234px] border border-[#CCCCCC] hover:bg-purple-200 hover:shadow-md transition-all duration-300 animate-slide-up animate-delay-300">
            <div className="text-center ">
             <img src={Team} alt="Maintenance Icon" className="mx-auto mb-4"/>
              <h3 className="text-[20px] font-Outfit font-medium text-[#000000] mb-8">
                Small Medium Sized Companies
              </h3>
              <a
                href="#"
                className="text-[#821AEA] font-Quicksand text-[15px] font-normal"
              >
                View Services →
              </a>
            </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8  animate-slide-up">
          Industries we have expertise in
        </h2>
        <p className="text-center mb-6 text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
          CoinRows is an IT company providing software development services to
          Startups and Small to Medium size companies working in below
          industries:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Healthcare */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              <img
                        src={Heart}
                        alt="Testing"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Healthcare
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              With the increasing demand for digital healthcare solutions, the
              healthcare industry needs software development services to develop
              custom solutions for electronic health records, patient management
              systems, medical billing software, and telemedicine applications.
              Overall, custom software development can help healthcare
              organizations improve patient care, optimize operations, and
              reduce costs.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
               <img
                        src={School}
                        alt="school"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Education
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              Education industry is rapidly adopting technology in teaching and
              learning processes. Custom software development solutions can help
              develop educational platforms, e-learning systems, online learning
              management systems, and student information systems.
            </p>
          </div>

          {/* Retail */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              <img
                        src={Store}
                        alt="store"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Retail
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              The retail industry is rapidly shifting towards online shopping
              and e-commerce, requiring software solutions to manage inventory,
              track orders, process payments, and more. Custom software
              development solutions can help retail companies stay competitive
              in the market.
            </p>
          </div>

          {/* Logistics & Transportation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              <img
                        src={Shipping}
                        alt="Shipping"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Logistics & Transportation
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              The logistics and transportation industry requires software
              development services to develop custom solutions for supply chain
              management, fleet management, tracking and delivery systems, and
              more. Custom software solutions can help companies streamline
              their logistics operations and improve efficiency.
            </p>
          </div>

          {/* Manufacturing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
             <img
                        src={Manifac}
                        alt="MANIFEC"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Manufacturing
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              The manufacturing industry requires software development services
              to develop custom solutions for inventory management, production
              planning, quality control, and more. Custom software solutions can
              help manufacturers improve their productivity and reduce costs.
            </p>
          </div>

          {/* Agriculture */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
               <img
                        src={Agri}
                        alt="Agri"
                        className="hover:scale-110 transition-transform duration-300"
                      />
            </div>
            <h3 className="text-[20px] font-Outfit font-normal text-[#000000] mb-2">
              Agriculture
            </h3>
            <p className="text-[#4A4A4A] font-Quicksand text-[15px] font-normal">
              Agriculture industry required innovative infrastructure to disrupt
              old farming techniques which can skyrocket their business.
            </p>
          </div>
        </div>
        
      </div>

       <div className=" mx-auto p-6 bg-gray-50">
            <h2 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8 ">Technologies that we use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 space-x-1 justify-items-center">
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4  transform transition duration-300 hover:scale-110 hover:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
             {tech.image ? (
                    <GatsbyImage image={tech.image} alt={tech.name} className="h-17 w-17 object-contain" />
                  ) : (
                    <span className="text-gray-400">Image not found</span>
                  )}
            </div>
              ))}
          </div>
          
          </div>
      
    
    </div>
    
  );
};

export default Services;


