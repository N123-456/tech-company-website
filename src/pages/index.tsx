import * as React from "react";
import { useEffect, useRef, useMemo } from "react";
import { AppLayout } from "../components/AppLayout/AppLayout.tsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Services from "./services.tsx";
import Projects from "./projects.tsx";
import Freequote from "./freequote.tsx";
import useScrollToQuote from "./useScrollToQuote.ts";

const IndexPage = () => {
  const quoteRef = useRef(null);
  useScrollToQuote(quoteRef);

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

  // Memoize images to prevent unnecessary recalculations
  const [sideImage, Rectangle5, Rectangle6] = useMemo(
    () => [
      getImage(data.sideimage),
      getImage(data.Rectangle5),
      getImage(data.Rectangle6),
    ],
    [data]
  );

  const services = useMemo(
    () => [
      {
        title: "Planning & Research",
        description:
          "We believe in upgrading software systems according to the latest and trending technologies in the market, providing you with the best and unique application development services.",
      },
      {
        title: "Risk free Software Deliveries",
        description:
          "Your business needs your attention, and you need more profit. So, we work beyond expectations to develop software that reduces your or your team's workload offering you extra hours to evaluate and boost your business growth.",
      },
      {
        title: "Result",
        description:
          "We value your money and security concerns; thus, we keep keen attention during the planning and development process to ensure zero risks, no security pitfalls, and malware. Integration in the software.",
      },
    ],
    []
  );

  return (
    <AppLayout>
      <main>
        <div className="pt-[80px] bg-white relative overflow-hidden">
          {/* Background Blobs - Memoized components would be even better */}
          <>
            <div className="absolute top-[-40px] left-[-150px] w-[400px] z-0 opacity-70 animate-float">
              <BlobSVG gradientId="grad1" />
            </div>
            <div className="absolute top-[-150px] right-[-150px] w-[400px] z-0 opacity-70 animate-floatReverse">
              <BlobSVG gradientId="grad2" />
            </div>
          </>

          <div className="container mx-auto px-10 flex flex-col items-center justify-center relative z-10">
            <div className="w-full max-w-7xl animate-fade-in">
              <HeroSection sideImage={sideImage} />
            </div>
          </div>

          {/* What We Do Section */}
          <div className="container mx-auto px-4 py-10">
            <h2 className="text-[32px] font-medium font-Outfit text-[#000000] text-center mb-8 animate-fade-in">
              What we do?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 border-b border-[#3FBAFF]">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
        <Services />
        <Projects />
        <Freequote quoteRef={quoteRef} />
      </main>
    </AppLayout>
  );
};

// Extracted components for better readability and performance
const BlobSVG = ({ gradientId }) => (
  <svg
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#821AEA" />
        <stop offset="50%" stopColor="#CF69FF" />
        <stop offset="100%" stopColor="#A32AFF" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#${gradientId})`}
      d="M421.6,334.1Q392.2,418.2,309.1,447.3Q226,476.5,175.6,405.3Q125.2,334.1,122.6,267.4Q120,200.7,169.5,147.3Q219.1,93.9,298.4,97.6Q377.7,101.2,418.2,175.6Q458.8,250,421.6,334.1Z"
    />
  </svg>
);

const HeroSection = ({ sideImage }) => (
  <div className="flex flex-col sm:flex-row gap-12 justify-between items-center animate-slide-up">
    <div className="max-w-xl animate-slide-up animate-delay-200">
      <h1 className="text-[40px] font-Outfit font-normal leading-tight">
        Strategic Dev Partnership
        <br />
        That Protects your <span className="text-[#821AEA]">IP</span>
      </h1>
      <p className="font-Quicksand font-[450px] text-[15px] text-[#4A4A4A] mt-4">
        Stop Losing $$$ in Knowledge Every Time a Contractor Leaves Smart
        software delivery with long-term IP retention in mind
      </p>
      <button className="mt-6 px-[22px] py-[10px] w-[328px] h-[42px] bg-[#821AEA] text-[#FFFFFF] text-[15px] font-normal font-Outfit rounded-full font-medium hover:opacity-90 transition">
        Get Your IP-Safe Software Delivery Now →
      </button>
    </div>
    <div className="lg:ml-12 sm:items-center animate-slide-up animate-delay-300 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300">
      {sideImage && <GatsbyImage image={sideImage} alt="Side illustration" />}
    </div>
  </div>
);

const ServiceCard = ({ title, description, delay = 0 }) => (
  <div
    className="bg-white p-6 shadow-lg border border-white hover:shadow-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center mb-4 space-x-2">
      <span className="inline-flex items-center justify-center w-[21px] h-[21px] rounded-full bg-[#3FBAFF]"></span>
      <h3 className="text-[16px] font-normal text-[#000000] font-Outfit">
        {title}
      </h3>
    </div>
    <p className="font-Quicksand font-normal text-[15px] text-[#4A4A4A]">
      {description}
    </p>
  </div>
);

export default IndexPage;

export const Head = () => (
  <>
    <title className="text-4xl font-bold text-purple-700">
      Col'n Rows Tech Website
    </title>
    <link rel="icon" href="/favicon.png" type="image/png" />
    <meta name="description" content="Col'n Rows Tech Company" />
  </>
);
