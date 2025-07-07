"use-client";
import React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import maintenance from "../assets/maintenance.svg";
import Testing from "../assets/testing.svg";
import Si from "../assets/SI.svg";
import Csi from "../assets/CSI.svg";
import Tc from "../assets/TC.svg";
import Ui from "../assets/UI.svg";
import Mvp from "../assets/MVP.svg";
import Csd from "../assets/CSD.svg";
import Wd from "../assets/WD.svg";
import Mad from "../assets/MAD.svg";
import Ec from "../assets/EC.svg";
import Lsm from "../assets/LSM.svg";
import Lsm2 from "../assets/LSM2.svg";
import Da from "../assets/DA.svg";
import Api from "../assets/API.svg";
import Csd2 from "../assets/CSD2.svg";
import Mas from "../assets/MAS.svg";
import It from "../assets/IT.svg";
const smallstartup = () => {
  const data = useStaticQuery(graphql`
    query {
      logo2: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const logo2 = getImage(data.logo2);
  const whatsapp = getImage(data.whatsapp);
  const instagram = getImage(data.instagram);
  const facebook = getImage(data.facebook);
  return (
    <AppLayout>
      <div>
        <div className="pt-[80px] bg-white relative overflow-hidden">
          {/* Hero Section with Background Blob */}
          <div className="absolute top-[-40px] left-[-150px] w-[400px] z-0 opacity-70 animate-float">
            <svg
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#821AEA" />
                  <stop offset="50%" stopColor="#CF69FF" />
                  <stop offset="100%" stopColor="#A32AFF" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad1)"
                d="M421.6,334.1Q392.2,418.2,309.1,447.3Q226,476.5,175.6,405.3Q125.2,334.1,122.6,267.4Q120,200.7,169.5,147.3Q219.1,93.9,298.4,97.6Q377.7,101.2,418.2,175.6Q458.8,250,421.6,334.1Z"
              />
            </svg>
          </div>

          {/* bottom-left */}
          <div className="absolute top-[-150px] right-[-150px] w-[400px] z-0 opacity-70 animate-floatReverse">
            <svg
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#821AEA" />
                  <stop offset="50%" stopColor="#CF69FF" />
                  <stop offset="100%" stopColor="#A32AFF" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad2)"
                d="M421.6,334.1Q392.2,418.2,309.1,447.3Q226,476.5,175.6,405.3Q125.2,334.1,122.6,267.4Q120,200.7,169.5,147.3Q219.1,93.9,298.4,97.6Q377.7,101.2,418.2,175.6Q458.8,250,421.6,334.1Z"
              />
            </svg>
          </div>

          <div className=" flex flex-col lg:items-center justify-center pt-20">
            <h1 className="text-[#821AEA] font-Outfit text-[40px] font-medium pl-[15px]">
              We have a range of services for
              <br />
            </h1>
            <h1 className="text-[#821AEA] font-Outfit lg:text-[40px] md:text-[38px] sm-md-range:text-[38px] sm-md-range:pl-5 sm:text[32px] font-extrabold sm:text-left pl-[15px] sm:pl-[1px] md:pl-5">
              <span>Startups and SME’s </span>
            </h1>

            <div className="pt-5 md:pt-10 md:pl-5 sm:pl-5 md-only:pl-4">
              <button className="w-[95px] h-[42px] px-[22px] py-[10px] bg-[#821AEA] text-[#FFFFFF] font-Outfit text-[15px] font-normal border rounded-xl">
                Explore
              </button>
            </div>
          </div>

          <div className="pt-[80px] bg-white flex flex-col items-center justify-center px-10">
            <div className="container mx-auto px-4 py-10">
              <h2 className="text-[32px] font-semibold font-Outfit text-center mb-8">
                Services for Small Startups
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Healthcare */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={maintenance} alt="Maintenance Icon" />
                    </div>
                  </div>

                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Maintenance & Support
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    After the initial development, startups may need ongoing
                    maintenance and support services. A software development
                    company can provide bug fixing, updates, security patches,
                    and technical support to ensure the software remains
                    functional and up-to-date.
                  </p>
                </div>

                {/* Education */}
                <div className="bg-white p-6  hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img
                        src={Testing}
                        alt="Testing"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Quality Assurance & Testing
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Education industry is rapidly adopting technology in
                    teaching and learning processes. Custom software development
                    solutions can help develop educational platforms, e-learning
                    systems, online learning management systems, and student
                    information systems.
                  </p>
                </div>

                {/* Retail */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Si} alt="SI" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Software Integration
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Startups often need to integrate their software with
                    third-party services or existing systems. A software
                    development company can help with API integrations, data
                    synchronization, and connecting various software components,
                    enabling startups to streamline their operations.
                  </p>
                </div>

                {/* Logistics & Transportation */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Csi} alt="CSI" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Cloud Solutions & Infratstructure
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can assist startups in
                    leveraging cloud computing platforms such as Amazon Web
                    Services (AWS), Microsoft Azure, or Google Cloud Platform
                    (GCP). They can help set up and manage the cloud
                    infrastructure, ensuring scalability, security, and
                    cost-efficiency
                  </p>
                </div>

                {/* Manufacturing */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Tc} alt="TC" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Technology Consulting
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Startups may need guidance on technology choices and
                    strategies. Software development companies can offer
                    consulting services, helping startups choose the right
                    technology stack, define a scalable architecture, and
                    provide insights into industry best practices.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Ui} alt="UI" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Creating a user-friendly and visually appealing interface is
                    crucial for startups to attract and retain customers.
                    Software development companies can provide UI/UX design
                    services, ensuring that the software or application has an
                    intuitive and engaging user experience.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Mvp} alt="MVP" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Minimum Viable Product (MVP) Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Startups often need to quickly validate their ideas and
                    attract investors or early adopters. A software development
                    company can help build an MVP, which is a basic version of
                    the product with essential features, allowing startups to
                    test the market and gather feedback.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Csd} alt="CSD" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can build custom software
                    solutions tailored to the unique requirements of a startup.
                    This includes developing web applications, mobile apps, and
                    desktop applications to support the startup's core business
                    functions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[80px] bg-white flex flex-col items-center justify-center px-10">
            <div className="container mx-auto px-4 py-10">
              <h2 className="text-[32px] font-semibold font-Outfit text-center mb-8">
                Services for SME’s
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Healthcare */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Wd} alt="WD" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Web Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Companies require an online presence to reach their target
                    audience. Software development companies can create
                    responsive and interactive websites for small to
                    medium-sized businesses, including e-commerce platforms,
                    content management systems (CMS), and web applications.
                  </p>
                </div>

                {/* Education */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Mad} alt="MAD" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Mobile App Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    With the increasing use of smartphones, having a mobile app
                    can be crucial for businesses. Software development
                    companies can develop mobile apps for iOS and Android
                    platforms, enabling companies to engage with their
                    customers, offer services, or streamline internal processes.
                  </p>
                </div>

                {/* Retail */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Ec} alt="EC" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    E-commerce Solutions
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    For businesses involved in online selling, software
                    development companies can create robust e-commerce platforms
                    with features like product catalogs, shopping carts, secure
                    payment gateways, inventory management, and order tracking.
                  </p>
                </div>

                {/* Logistics & Transportation */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Lsm} alt="LSM" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Legacy System Modernization
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Many small to medium-sized companies still rely on outdated
                    legacy systems. Software development companies can help
                    modernize and upgrade these systems, ensuring compatibility
                    with new technologies, enhancing security, and improving
                    overall performance.
                  </p>
                </div>

                {/* Manufacturing */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img
                        src={Lsm2}
                        alt="LSM2"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                  </div>

                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Legacy System Modernization
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can assist in migrating
                    existing systems to the cloud or building cloud-native
                    applications. This allows companies to leverage the
                    scalability, flexibility, and cost-efficiency of cloud
                    computing platforms.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Da} alt="DA" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Data Analytics and Business Intelligence
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Companies generate vast amounts of data, and software
                    development companies can help extract insights from this
                    data through analytics and business intelligence solutions.
                    This includes data visualization, reporting tools,
                    dashboards, and predictive analytics.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Api} alt="API" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Integration and API Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Small to medium-sized companies often use multiple software
                    systems that need to communicate with each other. Software
                    development companies can help integrate these systems by
                    developing APIs (Application Programming Interfaces) and
                    middleware, ensuring seamless data flow and process
                    automation.
                  </p>
                </div>

                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img
                        src={Csd2}
                        alt="CSD2"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can build tailored software
                    solutions that address the specific needs and challenges of
                    small to medium-sized companies. This includes developing
                    enterprise applications, management systems, CRM software,
                    inventory management systems, and more.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={Mas} alt="MAS" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Maintenance and Support
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can provide ongoing
                    maintenance and support services to small to medium-sized
                    companies. This includes bug fixing, updates, security
                    patches, performance monitoring, and user support to ensure
                    the smooth operation of software applications.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-br from-[#3FBAFF] via-[#821AEA] to-[#B671FB] mb-2">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <img src={It} alt="IT" className="w-[30px] h-[30px]" />
                    </div>
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    IT Consulting
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[13px]">
                    Software development companies can provide ongoing
                    maintenance and support services to small to medium-sized
                    companies. This includes bug fixing, updates, security
                    patches, performance monitoring, and user support to ensure
                    the smooth operation of software applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-10 w-[100%] ">
          <footer className="bg-gray-100 rounded-lg p-4 text-center shadow-lg">
            <div className="flex justify-center items-center mb-4">
              <div>
                {logo2 && (
                  <GatsbyImage image={logo2} alt="Logo"  />
                )}
              </div>
            </div>

            <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal mb-4">
              Every project we deliver comes with full system understanding for
              your internal team, not just working code
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
             <div className="relative w-full md:w-[494px]">
    <input
      type="email"
      placeholder="Subscribe to our newsletter"
      className="p-4 pr-[120px] border rounded-lg w-full h-[60px] focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#821AEA] text-white px-4 py-2 rounded-lg h-[42px] hover:bg-purple-600 transition duration-300"
    >
      Subscribe
    </button></div>
            </div>

            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="#"
                className="text-white rounded-full h-[50px] hover:text-green-700 transition duration-300"
              >
                <span className="sr-only">WhatsApp</span>
                {whatsapp && (
                  <GatsbyImage
                    image={whatsapp}
                    alt="WhatsApp"
                    className="h-[31px] w-[31px]"
                  />
                )}
              </a>
              <a
                href="#"
                className="text-pink-500 h-[50px] hover:text-pink-700 transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                {instagram && (
                  <GatsbyImage
                    image={instagram}
                    alt="Instagram"
                    className="h-[31px] w-[31px]"
                  />
                )}
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                <span className="sr-only">Facebook</span>
                {facebook && (
                  <GatsbyImage
                    image={facebook}
                    alt="Facebook"
                    className="h-[31px] w-[31px]"
                  />
                )}
              </a>
            </div>

            <div className="border-b border-bg-[#E5E5E5] "></div>
            <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal pt-5">
              © {new Date().getFullYear()} Col'n Rows. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </AppLayout>
  );
};

export default smallstartup;
