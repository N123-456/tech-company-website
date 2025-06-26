import React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

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
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      cs: file(relativePath: { eq: "cs.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      tc: file(relativePath: { eq: "tc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ui: file(relativePath: { eq: "ui.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mvp: file(relativePath: { eq: "mvp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      csd: file(relativePath: { eq: "csd.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }

      wd: file(relativePath: { eq: "wd.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mad: file(relativePath: { eq: "mad.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ec: file(relativePath: { eq: "ec.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      lsm: file(relativePath: { eq: "lsm.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      lsm2: file(relativePath: { eq: "lsm2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      da: file(relativePath: { eq: "da.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      api: file(relativePath: { eq: "api.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      csd2: file(relativePath: { eq: "csd2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ms: file(relativePath: { eq: "ms.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      itc: file(relativePath: { eq: "itc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
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

  const wd = getImage(data.wd);
  const mad = getImage(data.mad);
  const ec = getImage(data.ec);
  const lsm = getImage(data.lsm);
  const lsm2 = getImage(data.lsm2);
  const da = getImage(data.da);
  const api = getImage(data.api);
  const csd2 = getImage(data.csd2);
  const ms = getImage(data.ms);
  const itc = getImage(data.itc);
  return (
    <AppLayout>
      <div>
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-[#821AEA] font-Outfit text-[40px] font-medium pl-[15px]">
            We have a range of services for
            <br /></h1>
           <h1 className="text-[#821AEA] font-Outfit text-[40px] font-extrabold pl-[15px]"><span>
              Startups and SME’s{" "}
            </span></h1> 
          
          <div className="pt-10">
          <button className="w-[95px] h-[42px] px-[22px] py-[10px] bg-[#821AEA] text-[#FFFFFF] font-Outfit text-[15px] font-normal border rounded-xl">
            Explore
          </button>
          </div>
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
                  After the initial development, startups may need ongoing
                  maintenance and support services. A software development
                  company can provide bug fixing, updates, security patches, and
                  technical support to ensure the software remains functional
                  and up-to-date.
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
                  Education industry is rapidly adopting technology in teaching
                  and learning processes. Custom software development solutions
                  can help develop educational platforms, e-learning systems,
                  online learning management systems, and student information
                  systems.
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
                  Startups often need to integrate their software with
                  third-party services or existing systems. A software
                  development company can help with API integrations, data
                  synchronization, and connecting various software components,
                  enabling startups to streamline their operations.
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
                  Startups may need guidance on technology choices and
                  strategies. Software development companies can offer
                  consulting services, helping startups choose the right
                  technology stack, define a scalable architecture, and provide
                  insights into industry best practices.
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
                  Creating a user-friendly and visually appealing interface is
                  crucial for startups to attract and retain customers. Software
                  development companies can provide UI/UX design services,
                  ensuring that the software or application has an intuitive and
                  engaging user experience.
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
                  Startups often need to quickly validate their ideas and
                  attract investors or early adopters. A software development
                  company can help build an MVP, which is a basic version of the
                  product with essential features, allowing startups to test the
                  market and gather feedback.
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
            <h2 className="text-[40px] font-semibold font-Outfit text-center mb-8">
              Services for SME’s
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Healthcare */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {wd && (
                    <GatsbyImage
                      image={wd}
                      alt="Healthcare Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }} // Ensure image scales
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Web Development
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Companies require an online presence to reach their target
                  audience. Software development companies can create responsive
                  and interactive websites for small to medium-sized businesses,
                  including e-commerce platforms, content management systems
                  (CMS), and web applications.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {mad && (
                    <GatsbyImage
                      image={mad}
                      alt="Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Mobile App Development
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  With the increasing use of smartphones, having a mobile app
                  can be crucial for businesses. Software development companies
                  can develop mobile apps for iOS and Android platforms,
                  enabling companies to engage with their customers, offer
                  services, or streamline internal processes.
                </p>
              </div>

              {/* Retail */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {ec && (
                    <GatsbyImage
                      image={ec}
                      alt="Retail Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  E-commerce Solutions
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  For businesses involved in online selling, software
                  development companies can create robust e-commerce platforms
                  with features like product catalogs, shopping carts, secure
                  payment gateways, inventory management, and order tracking.
                </p>
              </div>

              {/* Logistics & Transportation */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {lsm && (
                    <GatsbyImage
                      image={lsm}
                      alt="Logistics Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Legacy System Modernization
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Many small to medium-sized companies still rely on outdated
                  legacy systems. Software development companies can help
                  modernize and upgrade these systems, ensuring compatibility
                  with new technologies, enhancing security, and improving
                  overall performance.
                </p>
              </div>

              {/* Manufacturing */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {lsm2 && (
                    <GatsbyImage
                      image={lsm2}
                      alt="Manufacturing Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Legacy System Modernization
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Software development companies can assist in migrating
                  existing systems to the cloud or building cloud-native
                  applications. This allows companies to leverage the
                  scalability, flexibility, and cost-efficiency of cloud
                  computing platforms.
                </p>
              </div>

              {/* Agriculture */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {da && (
                    <GatsbyImage
                      image={da}
                      alt="Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Data Analytics and Business Intelligence
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Companies generate vast amounts of data, and software
                  development companies can help extract insights from this data
                  through analytics and business intelligence solutions. This
                  includes data visualization, reporting tools, dashboards, and
                  predictive analytics.
                </p>
              </div>

              {/* Agriculture */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {api && (
                    <GatsbyImage
                      image={api}
                      alt="Agriculture Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Integration and API Development
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
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
                <div className="flex mb-2">
                  {csd2 && (
                    <GatsbyImage
                      image={csd2}
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
                  Software development companies can build tailored software
                  solutions that address the specific needs and challenges of
                  small to medium-sized companies. This includes developing
                  enterprise applications, management systems, CRM software,
                  inventory management systems, and more.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {ms && (
                    <GatsbyImage
                      image={ms}
                      alt="Agriculture Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  Maintenance and Support
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Software development companies can provide ongoing maintenance
                  and support services to small to medium-sized companies. This
                  includes bug fixing, updates, security patches, performance
                  monitoring, and user support to ensure the smooth operation of
                  software applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-2">
                  {itc && (
                    <GatsbyImage
                      image={itc}
                      alt="Agriculture Logo"
                      className="hover:scale-110 transition-transform duration-300 rounded-full"
                      imgStyle={{ transition: "transform 0.3s ease" }}
                    />
                  )}
                </div>
                <h3 className="text-20 font-semibold font-Outfit text-[#000000] mb-2">
                  IT Consulting
                </h3>
                <p className="text-[#4A4A4A] font-normal font-Quicksand text-[15px]">
                  Software development companies can provide ongoing maintenance
                  and support services to small to medium-sized companies. This
                  includes bug fixing, updates, security patches, performance
                  monitoring, and user support to ensure the smooth operation of
                  software applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default smallstartup;
