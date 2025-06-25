import * as React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TechStack from "./technologies";

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
      healthcareLogo: file(relativePath: { eq: "cardiology.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
      educationLogo: file(relativePath: { eq: "school.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
      retailLogo: file(relativePath: { eq: "storefront.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
      logisticsLogo: file(relativePath: { eq: "local_shipping.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
      manufacturingLogo: file(relativePath: { eq: "manufacturing-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
      agricultureLogo: file(relativePath: { eq: "agriculture.png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50)
        }
      }
    }
  `);

  const startupImage = getImage(data.startupImage);
  const companyImage = getImage(data.companyImage);
  const healthcareLogo = getImage(data.healthcareLogo);
  const educationLogo = getImage(data.educationLogo);
  const retailLogo = getImage(data.retailLogo);
  const logisticsLogo = getImage(data.logisticsLogo);
  const manufacturingLogo = getImage(data.manufacturingLogo);
  const agricultureLogo = getImage(data.agricultureLogo);
  return (
    <AppLayout>
      <div className="pt-[80px] bg-white flex flex-col items-center justify-center px-10">
        <section className="w-full max-w-7xl py-10 animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-8  animate-slide-up">
            We offer our services to
          </h2>
          <div className="flex flex-col sm:flex-row justify-around items-center py-6 animate-fade-in">
            <div className="text-center animate-slide-up animate-delay-200 ">
              {startupImage && (
                <GatsbyImage
                  image={startupImage}
                  alt="Startups illustration"
                  className="w-[127px] h-[90px] mx-auto mb-4 bg-white"
                />
              )}
              <h3 className="text-2xl font-[Outfit] font-bold text-[#000000] mb-2">
                Startups
              </h3>
              <a
                href="#"
                className="text-[#A259FF] font-[Quicksand] text-xl font-normal"
              >
                View Services →
              </a>
            </div>
            <div className="text-center animate-slide-up animate-delay-300">
              {companyImage && (
                <GatsbyImage
                  image={companyImage}
                  alt="Companies illustration"
                  className="w-[145px] h-[78px] mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-[Outfit] font-bold text-[#000000] mb-2">
                Small Medium Sized Companies
              </h3>
              <a
                href="#"
                className="text-[#A259FF] font-[Quicksand] text-xl font-normal"
              >
                View Services →
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          Industries we have expertise in
        </h2>
        <p className="text-center mb-6 text-gray-600">
          CoinRows is an IT company providing software development services to
          Startups and Small to Medium size companies working in below
          industries:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Healthcare */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              {healthcareLogo && (
                <GatsbyImage
                  image={healthcareLogo}
                  alt="Healthcare Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }} // Ensure image scales
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Healthcare
            </h3>
            <p className="text-gray-600 text-sm">
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
              {educationLogo && (
                <GatsbyImage
                  image={educationLogo}
                  alt="Education Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Education
            </h3>
            <p className="text-gray-600 text-sm">
              Education industry is rapidly adopting technology in teaching and
              learning processes. Custom software development solutions can help
              develop educational platforms, e-learning systems, online learning
              management systems, and student information systems.
            </p>
          </div>

          {/* Retail */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              {retailLogo && (
                <GatsbyImage
                  image={retailLogo}
                  alt="Retail Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Retail
            </h3>
            <p className="text-gray-600 text-sm">
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
              {logisticsLogo && (
                <GatsbyImage
                  image={logisticsLogo}
                  alt="Logistics Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Logistics & Transportation
            </h3>
            <p className="text-gray-600 text-sm">
              The logistics and transportation industry requires software
              development services to develop custom solutions for supply chain
              management, fleet management, tracking and delivery systems, and
              more. Custom software solutions can help companies streamline
              their logistics operations and improve efficiency.
            </p>
          </div>

          {/* Manufacturing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-2">
              {manufacturingLogo && (
                <GatsbyImage
                  image={manufacturingLogo}
                  alt="Manufacturing Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Manufacturing
            </h3>
            <p className="text-gray-600 text-sm">
              The manufacturing industry requires software development services
              to develop custom solutions for inventory management, production
              planning, quality control, and more. Custom software solutions can
              help manufacturers improve their productivity and reduce costs.
            </p>
          </div>

          {/* Agriculture */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-2">
              {agricultureLogo && (
                <GatsbyImage
                  image={agricultureLogo}
                  alt="Agriculture Logo"
                  className="hover:scale-110 transition-transform duration-300"
                  imgStyle={{ transition: "transform 0.3s ease" }}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              Agriculture
            </h3>
            <p className="text-gray-600 text-sm">
              Agriculture industry required innovative infrastructure to disrupt
              old farming techniques which can skyrocket their business.
            </p>
          </div>
        </div>
        
      </div>
      <TechStack/>
    </AppLayout>
  );
};

export default Services;

export const Head = () => <title>Home Page</title>;
