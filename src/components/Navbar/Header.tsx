import { graphql, Link, navigate, useStaticQuery } from "gatsby";
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

  const handleScrollToQuote = () => {
    setIsMenuOpen(false); // Close the mobile menu
    if (typeof window !== "undefined") {
      const quoteElement = document.getElementById("quote");
      if (quoteElement) {
        quoteElement.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to the homepage with #quote hash
        navigate("/#quote");
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="h-[80px] lg:h-[100px] bg-white flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 shadow-md border-b">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          {tlogo && <GatsbyImage image={tlogo} alt="Logo"  />}
        </div>

        {/* Desktop Nav (lg and above only) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10 text-sm lg:text-[15px] font-Outfit text-[#4A4A4A]">
          <Link to="/" className="hover:text-[#821AEA] hover:font-semibold transition">Home</Link>
          <Link to="/about" className="hover:text-[#821AEA] hover:font-semibold transition">About Us</Link>
          <Link to="/smallstartup" className="hover:text-[#821AEA] hover:font-semibold transition">Services</Link>
          <Link to="" className="hover:text-[#821AEA] hover:font-semibold transition">Case Studies</Link>
          <Link to="/contact" className="hover:text-[#821AEA] hover:font-semibold transition">Referrals</Link>
        </nav>

        {/* Desktop Button (lg and above only) */}
        <div className="hidden lg:flex">
         <button
            onClick={handleScrollToQuote}
            className="bg-[#821AEA] text-white text-sm lg:text-[15px] w-[90px] h-[35px] lg:w-[118px] lg:h-[42px] rounded-xl font-Outfit hover:opacity-90 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile & Tablet Hamburger Icon (sm + md only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-md border-b py-4 space-y-3 font-Outfit text-[15px] text-[#4A4A4A] transition-all duration-300">
          <Link to="/" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/smallstartup" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" className="hover:text-[#821AEA]" onClick={() => setIsMenuOpen(false)}>Referrals</Link>
         <button
            onClick={handleScrollToQuote}
            className="mt-2 bg-[#821AEA] text-white w-[110px] h-[42px] rounded-xl font-Outfit hover:opacity-90 transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
