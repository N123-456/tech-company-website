import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      tlogo: file(relativePath: { eq: "tlogo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
        logo2: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, height: 40, placeholder: TRACED_SVG)
        }
      }
    }
  `);

  const tlogo = getImage(data.tlogo);
  const logo2 = getImage(data.logo2);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
    
      {/* Header */}
      <header className="h-[100px] bg-[#FFFFFF] flex items-center justify-between md:px-6 px-4 shadow-md border-b">
        {/* Logo Section */}
        <div className="flex items-center md:px-[137px] px-2 py-[1px] w-full md:w-auto justify-center md:justify-start">
          {tlogo && <GatsbyImage image={tlogo} alt="Logo" />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 font-normal gap-[77px] font-Outfit text-[15px] text-[#4A4A4A]">
          <Link to="/" className="hover:text-[#821AEA] hover:font-semibold transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:text-[#821AEA] hover:font-semibold transition-colors duration-200">About Us</Link>
          <Link to="/smallstartup" className="hover:text-[#821AEA] hover:font-semibold transition-colors duration-200">Services</Link>
          <Link to="" className="hover:text-[#821AEA] hover:font-semibold transition-colors duration-200">Case Studies</Link>
          <Link to="/contact" className="hover:text-[#821AEA] hover:font-semibold transition-colors duration-200">Referrals</Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-[#821AEA] text-[15px] text-[#FFFFFF] w-[118px] h-[42px] rounded-xl font-Outfit font-normal hover:text-text-light transition-colors duration-200">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md border-b py-4 space-y-3 font-Outfit text-[15px] text-[#4A4A4A] transition-all duration-300">
          <Link to="/" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/smallstartup" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Referrals</Link>
          <button className="mt-2 bg-[#821AEA] text-white w-[118px] h-[42px] rounded-xl">Contact Us</button>
        </div>
      )}
    </div>
  );
};

export default Header;
