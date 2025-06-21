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
     <main className=" pt-[80px]  bg-white flex flex-col items-center justify-center px-10">
  <div className="flex items-center justify-between w-full max-w-7xl">
    {/* Left Section */}
    <div className="max-w-xl">
      <h1 className="text-[42px] font-['Outfit'] font-medium leading-tight">
        Skyrocket your <br />
        Business <span className="text-[#821AEA]">Growth</span>
      </h1>

      <p className="text-[#4A4A4A] font-['Quicksand'] mt-4 text-[18px]">
        Col n' Rows - A White Label Software Agency that provides a one-stop shop for startups to all-size businesses.
      </p>

      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#A259FF] to-[#821AEA] text-white rounded-full font-medium hover:opacity-90 transition">
        Get Started
      </button>
    </div>

    {/* Right Section - Image */}
    <div className="ml-12">
      {sideImage && (
        <GatsbyImage
          image={sideImage}
          alt="Side illustration"
          className="w-[420px] h-auto"
        />
      )}
    </div>
  </div>
  {/* What We Do Section */}
        <section className="w-full max-w-7xl pt-[50px] border-b border-blue-700 mb-4">
          <h2 className="text-3xl font['Outfit'] font-medium text-center mb-10">What we do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="bg-white p-6 rounded-lg border border-blue-100 text-center h-[300px]">
            <div className="flex items-center justify-center mb-4 gap-0">
              <div className="w-[21px] h-[21px] bg-[#3FBAFF] rounded-full mr-4">
                <span></span>
              </div>
              <h3 className="text-xl font-['Outfit'] font-medium text-[#000000]">Planning & Research</h3>
              </div>
               <p className="text-[#4A4A4A] text-[15px] font-normal">
               
                We believe in upgrading software systems according to 
    the latest and trending technologies in the market, 
    providing you with the best and unique software and 
    application development services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-100 text-center">
               
             <div className="flex items-center justify-center mb-4 gap-0">
              <div className="w-[21px] h-[21px] bg-[#3FBAFF] rounded-full mr-4">
                <span></span>
              </div>
              <h3 className="text-xl font-['Outfit'] font-normal  text-[#000000] ">Risk free Software Deliveries</h3></div>
             <p className="text-[#4A4A4A] text-[15px] font-normal">
                Your business needs your attention, and you need more profit. So, we
                develop beyond expectations to work that reduces your or your team's
                workload offering and boost your business growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-100 text-center">
                <div className="flex items-center justify-center mb-4 gap-0">
              <div className="w-[21px] h-[21px] bg-[#3FBAFF] rounded-full mr-4">
                <span></span>
              </div>
              <h3 className="text-xl font['Outfit'] font-normal text-[#000000]">Result</h3></div>
              <p className="text-[#4A4A4A] text-[15px] font-normal">
                We value your money and security concerns; thus, we<br/> keep keen
                attention during the planning and development process to ensure
                zero risks, no security pitfalls, and software integration in the
                malware.
              </p>
            </div>
         
</div>
        </section>
        
</main>

    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
