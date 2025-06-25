import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
          logo2: file(relativePath: { eq: "logo2.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      `);
       const logo2 = getImage(data.logo2);
  return (
    <footer className="bg-gray-50 rounded-lg p-4 text-center shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <div className="">
          {logo2 && (
                      <GatsbyImage
                        image={logo2}
                        alt="Companies illustration"
                        className="h-[106px]"
                      />)}
        </div>
      </div>
      <p className="text-gray-600 mb-4">
        Every project we deliver comes with full system understanding for your internal team, not just working code
      </p>
      <div className="flex justify-center items-center mb-4">
        <input
          type="email"
          placeholder="Subscribe to our newsletter"
          className="p-2 border rounded-lg w-[494px] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="bg-[#821AEA] text-white p-2 rounded-lg w-[109px] h-[42px] hover:bg-purple-600 transition duration-300">
          Subscribe
        </button>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-green-500 hover:text-green-700 transition duration-300">
          <span className="">WhatsApp</span>
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-700 transition duration-300">
          <span className="">Instagram</span>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
          <span className="">Facebook</span>
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className='border-b border-bg-[#E5E5E5] '></div>
      <p className="text-gray-500 text-sm pt-5">
        © 2023 Col'n Rows. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;