import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
          
            height: 60
      
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);

  return (
    <div>
      <header className="h-[100px] bg-[#DBDBDB40] flex items-center justify-between px-6 shadow-md border-b">
        <div className="flex items-center">
          <GatsbyImage image={logoImage!} alt="Logo" className=' w-[10.63px]'/>
          <h1 className="text-[#821AEA] text-[30px] font-['Reem Kufi Fun'] font-medium pt-[5px] pl-[5px]">Col n'Rows</h1>
        </div>
        <nav className="flex space-x-10 font-semibold gap-[77px] font-['Outfit'] text-[20px] text-[#393939]">
          <Link
            to="/"
            className=" hover:text-[#821AEA] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#821AEA] transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-[#821AEA] transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="    hover:text-[#821AEA] transition-colors duration-200"
          >
            Case Studies
          </Link>
            <Link
            to="/contact"
            className="    hover:text-[#821AEA]  transition-colors duration-200"
          >
            Referrals
          </Link>

        </nav>
         <div className="flex items-center space-x-6">
        <button className=" bg-[#821AEA] text-[18px] text-[#FFFFFF] w-[118px] h-[45px] border rounded-full font-['Outfit'] font-normal hover:text-text-light transition-colors duration-200" >
        Contact Us
        
        </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
