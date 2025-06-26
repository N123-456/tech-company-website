import React from 'react'
import { AppLayout } from '../components/AppLayout/AppLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby';

const smallstartup = () => {
     const data = useStaticQuery(graphql`
        query {
          mans: file(relativePath: { eq: "mans.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          qa: file(relativePath: { eq: "qa.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          si: file(relativePath: { eq: "si.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
          cs: file(relativePath: { eq: "cs.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
          tc: file(relativePath: { eq: "tc.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
          ui: file(relativePath: { eq: "ui.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
          mvp: file(relativePath: { eq: "mvp.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
          csd: file(relativePath: { eq: "csd.png" }) {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50)
            }
          }
        }
      `);
    
      const mans = getImage(data.mans);
      const qa = getImage(data.qa);
      const si = getImage(data.si);
      const cs = getImage(data.cs);
      const tc = getImage(data.tc);
      const ui = getImage(data.ui);
      const mvp = getImage(data.mvp);
      const csd = getImage(data.csd);
  return (
    <AppLayout>
    <div>
      <div className='flex flex-col items-center justify-center pt-20'>
        <h1 className='text-[#821AEA] font-Outfit text-[40px]'>We have a range of services for<br/>
<span className='text-[#821AEA] font-semibold pl-[15px]'>Startups and SME’s </span></h1>
<button className='w-[95px] h-[42px] bg-[#821AEA] text-[#FFFFFF] font-Outfit text-[15px] font-normal rounded-lg'>Explore</button>
      </div>


      <div className="pt-[80px] bg-white flex flex-col items-center justify-center px-10">
             
            <div className="container mx-auto px-4 py-10">
              <h2 className="text-[40px] font-semibold font-Outfit text-center mb-8">
                Services for Small Startups
              </h2>
             
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Healthcare */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {mans && (
                      <GatsbyImage
                        image={mans}
                        alt="Healthcare Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }} // Ensure image scales
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                   Maintenance & Support
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  After the initial development, startups may need ongoing maintenance and support services. A software development company can provide bug fixing, updates, security patches, and technical support to ensure the software remains functional and up-to-date.
                  </p>
                </div>
      
                {/* Education */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {qa && (
                      <GatsbyImage
                        image={qa}
                        alt="Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Quality Assurance & Testing
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                    Education industry is rapidly adopting technology in teaching and
                    learning processes. Custom software development solutions can help
                    develop educational platforms, e-learning systems, online learning
                    management systems, and student information systems.
                  </p>
                </div>
      
                {/* Retail */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {si && (
                      <GatsbyImage
                        image={si}
                        alt="Retail Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Software Integration
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                    Startups often need to integrate their software with third-party services or existing systems. A software development company can help with API integrations, data synchronization, and connecting various software components, enabling startups to streamline their operations.
                  </p>
                </div>
      
                {/* Logistics & Transportation */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {cs && (
                      <GatsbyImage
                        image={cs}
                        alt="Logistics Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Cloud Solutions & Infratstructure
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                    Software development companies can assist startups in leveraging cloud computing platforms such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP). They can help set up and manage the cloud infrastructure, ensuring scalability, security, and cost-efficiency
                  </p>
                </div>
      
                {/* Manufacturing */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {tc && (
                      <GatsbyImage
                        image={tc}
                        alt="Manufacturing Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Technology Consulting
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                   Startups may need guidance on technology choices and strategies. Software development companies can offer consulting services, helping startups choose the right technology stack, define a scalable architecture, and provide insights into industry best practices.
                  </p>
                </div>
      
                {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {ui && (
                      <GatsbyImage
                        image={ui}
                        alt="Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                   Creating a user-friendly and visually appealing interface is crucial for startups to attract and retain customers. Software development companies can provide UI/UX design services, ensuring that the software or application has an intuitive and engaging user experience.
                  </p>
                </div>

                 {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {mvp && (
                      <GatsbyImage
                        image={mvp}
                        alt="Agriculture Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Minimum Viable Product (MVP) Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                    Startups often need to quickly validate their ideas and attract investors or early adopters. A software development company can help build an MVP, which is a basic version of the product with essential features, allowing startups to test the market and gather feedback.
                  </p>
                </div>

 {/* Agriculture */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-2">
                    {csd && (
                      <GatsbyImage
                        image={csd}
                        alt="Agriculture Logo"
                        className="hover:scale-110 transition-transform duration-300 rounded-full"
                        imgStyle={{ transition: "transform 0.3s ease" }}
                      />
                    )}
                  </div>
                  <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                    Software development companies can build custom software solutions tailored to the unique requirements of a startup. This includes developing web applications, mobile apps, and desktop applications to support the startup's core business functions.
                  </p>
                </div>
              </div></div>
    </div></div>
    </AppLayout>
  )
}

export default smallstartup
