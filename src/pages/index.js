import * as React from "react";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Services from "./services";
import Projects from "./projects";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sideimage: file(relativePath: { eq: "sideimage.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      Rectangle5: file(relativePath: { eq: "Rectangle5.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      Rectangle6: file(relativePath: { eq: "Rectangle6.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const sideImage = getImage(data.sideimage);
   const Rectangle5 = getImage(data.Rectangle5);
    const Rectangle6 = getImage(data.Rectangle6);
  return (
    <AppLayout>
   
  
       <main>
        {/* Hero Section with Background Blob */}
        <div className="pt-[80px] bg-white relative overflow-hidden">
       

          <div className="container mx-auto px-10 flex flex-col items-center justify-center relative z-10">
            <div className="w-full max-w-7xl animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-12 justify-between items-center animate-slide-up">
                {/* Left Section */}
                <div className="max-w-xl animate-slide-up animate-delay-200">
                  <h1 className="text-[40px] font-Outfit font-normal leading-tight">
                    Strategic Dev Partnership<br />
                    That Protects your <span className="text-[#821AEA]">IP</span>
                  </h1>

                  <p className="font-Quicksand font-[450px] text-[15px] text-[#4A4A4A] mt-4">
                   Stop Losing $$$ in Knowledge Every Time a Contractor Leaves
Smart software delivery with long-term IP retention in mind
                  </p>

                  <button className="mt-6 px-[22px] py-[10px] w-[328px] h-[42px] bg-[#821AEA] text-[#FFFFFF] text-[15px] font-normal font-Outfit rounded-full font-medium hover:opacity-90 transition">
                    Get Your IP-Safe Software Delivery Now
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
        </div>
        {/* What We Do Section */}
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-[32px] font-medium font-Outfit text-[#000000] text-center mb-8 animate-fade-in">
            What we do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#3FBAFF] ">
            {/* Planning & Research */}
            <div className="bg-white p-6  shadow-lg border border-white hover:shadow-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up">
              <div className="flex flex items-center mb-4 space-x-2">
                <span className="inline-flex items-center rounded-full bg-[#3FBAFF] w-[21px] h-[21px] font-bold"></span>

                <h3 className="text-[20px] font-normal text-[#000000] font-Outfit">
                  Planning & Research
                </h3>
              </div>
              <p className="font-Quicksand font-normal text-[15px] text-[#4A4A4A]">
                We believe in upgrading software systems according to the latest
                and trending technologies in the market, providing you with the
                best and unique application development services.
              </p>
            </div>

            {/* Risk free Software Deliveries */}
            <div className="bg-white p-6  shadow-lg border border-white  hover:shadow-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up delay-200">
              <div className="flex flex items-center mb-4 space-x-2">
                <span className="inline-flex items-center justify-center w-[21px] h-[21px] rounded-full bg-[#3FBAFF]"></span>

                <h3 className="text-[20px] font-normal text-[#000000] font-Outfit">
                  Risk free Software Deliveries
                </h3>
              </div>
              <p className="font-Quicksand font-normal text-[15px] text-[#4A4A4A]">
                Your business needs your attention, and you need more profit.
                So, we work beyond expectations to develop software that reduces
                your or your team’s workload offering you extra hours to
                evaluate and boost your business growth.
              </p>
            </div>

            {/* Result */}
            <div className="bg-white p-6  shadow-lg border border-white hover:shadow-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up delay-400">
              <div className="flex items-center mb-4 space-x-2">
                <span className="inline-flex items-center justify-center w-[21px] h-[21px] rounded-full bg-[#3FBAFF]"></span>

                <h3 className="text-[20px] font-normal text-[#000000] font-Outfit">
                  Result
                </h3>
              </div>
              <p className="font-Quicksand font-normal text-[15px] text-[#4A4A4A]">
                We value your money and security concerns; thus, we keep keen
                attention during the planning and development process to ensure
                zero risks, no security pitfalls, and malware. Integration in
                the software.
              </p>
            </div>
          </div>
        </div>
     <Services/>
     <Projects/>
      </main>
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
