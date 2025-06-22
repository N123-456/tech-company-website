import * as React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sideimage: file(relativePath: { eq: "sideimage.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }

      }
    }
  `);

  const sideImage = getImage(data.sideimage);
  return (
    <AppLayout>
      <main >
      <div className="pt-[80px] bg-white flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-7xl animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-center animate-slide-up">
            {/* Left Section */}
            <div className="max-w-xl animate-slide-up animate-delay-200">
              <h1 className="text-[42px] font-['Outfit'] font-medium leading-tight">
                Skyrocket your <br />
                Business <span className="text-[#821AEA]">Growth</span>
              </h1>

              <p className="text-[#4A4A4A] font-['Quicksand'] mt-4 text-[18px]">
                Col n' Rows - A White Label Software Agency that provides a
                one-stop shop for startups to all-size businesses.
              </p>

              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#A259FF] to-[#821AEA] text-white rounded-full font-medium hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="ml-12 animate-slide-up animate-delay-300 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
              {sideImage && (
                <GatsbyImage
                  image={sideImage}
                  alt="Side illustration"
                  className="w-[420px] h-auto"
                />
              )}
            </div>
          </div>
        </div>
        </div>
        {/* What We Do Section */}
       <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8 border-b-2 border-gray-200 pb-2 animate-fade-in">What we do?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Planning & Research */}
        <div className="bg-white p-6 rounded-none border border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-slide-up">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
              1
            </span>
          </div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">Planning & Research</h3>
          <p className="text-gray-600 text-sm text-center">
            We believe in upgrading software systems according to the latest and trending technologies in the market, providing you with the best and unique application development services.
          </p>
        </div>

        {/* Risk free Software Deliveries */}
        <div className="bg-white p-6 rounded-none border border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-slide-up delay-200">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
              2
            </span>
          </div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">Risk free Software Deliveries</h3>
          <p className="text-gray-600 text-sm text-center">
            Your business needs your attention, and you need more profit. So, we work beyond expectations to develop software that reduces your or your team’s workload offering you extra hours to evaluate and boost your business growth.
          </p>
        </div>

        {/* Result */}
        <div className="bg-white p-6 rounded-none border border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-slide-up delay-400">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
              3
            </span>
          </div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">Result</h3>
          <p className="text-gray-600 text-sm text-center">
            We value your money and security concerns; thus, we keep keen attention during the planning and development process to ensure zero risks, no security pitfalls, and malware. Integration in the software.
          </p>
        </div>
      </div>
    </div>
        
      </main>
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;