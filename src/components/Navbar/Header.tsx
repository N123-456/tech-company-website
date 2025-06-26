import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      tlogo: file(relativePath: { eq: "tlogo.png" }) {
        childImageSharp {
          gatsbyImageData(
          
      
            placeholder: BLURRED
        
          )
        }
      }
    }
  `);

  const tlogo = getImage(data.tlogo);

  return (
    <div>
      <header className="h-[100px] bg-[#FFFFFF] flex items-center justify-between px-6 shadow-md border-b">
        <div className="flex items-center px-[137px] py-[1px]">
         {tlogo&& <GatsbyImage image={tlogo!} alt="Logo"/>}
  
        </div>
        <nav className="flex space-x-4 font-normal gap-[77px] font-Outfit text-[15px] text-[#4A4A4A]">
          <Link
            to="/"
            className=" hover:text-[#821AEA] hover:font-semibold transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#821AEA]  hover:font-semibold transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/smallstartup"
            className="hover:text-[#821AEA]  hover:font-semibold transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to=""
            className="    hover:text-[#821AEA]  hover:font-semibold transition-colors duration-200"
          >
            Case Studies
          </Link>
            <Link
            to="/contact"
            className="    hover:text-[#821AEA]  hover:font-semibold  transition-colors duration-200"
          >
            Referrals
          </Link>

        </nav>
         <div className="flex items-center space-x-6">
        <button className=" bg-[#821AEA] text-[15px] text-[#FFFFFF] w-[118px] h-[42px] rounded-xl font-Outfit font-normal hover:text-text-light transition-colors duration-200" >
        Contact Us
        
        </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
