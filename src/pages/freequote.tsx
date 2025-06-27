import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Freequote = () => {
  const data = useStaticQuery(graphql`
    query {
      signin: file(relativePath: { eq: "signin.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         logo2: file(relativePath: { eq: "logo2.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
             signin: file(relativePath: { eq: "signin.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         logo2: file(relativePath: { eq: "logo2.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
             signin: file(relativePath: { eq: "signin.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
             instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         facebook: file(relativePath: { eq: "facebook.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
    }
  `);

  const signin = getImage(data.signin);
   const logo2 = getImage(data.logo2);
   const whatsapp = getImage(data.whatsapp);
   const instagram = getImage(data.instagram);
   const facebook = getImage(data.facebook);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      <h2 className="text-[32px] font-medium font-Outfit text-[#000000] text-center mb-4 pt-4">
        Get a free quote
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-[1141px] h-[519px] bg-white p-4 pt-10 space-x-10">
        <div className="md:w-1/2 p-6">
          {signin && (
            <GatsbyImage
              image={signin}
              alt="Companies illustration"
              className="mx-auto h-[509px] mb-4 rounded-xl transform transition duration-300 hover:scale-105"
            />
          )}
        </div>
        <div className="w-full h-[509px] md:w-1/2 p-6 bg-white transform transition duration-300 hover:shadow-xl">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Service"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Your message"
              className="w-[502px] p-2 border rounded h-24"
            />
            <div className="flex pl-[200px]">
              <button
                type="submit"
                className="w-[153px] h[42px] text-[15px] bg-[#821AEA] text-[#FFFFFF] font-Outfit font-normal p-2 rounded-xl hover:bg-purple-700 transition duration-300"
              >
                Get a free quote
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-10">
     
    </div>
     <footer className="bg-gray-100 rounded-lg p-4 text-center w-[1301px] shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <div className="">
              {logo2 && (
                          <GatsbyImage
                            image={logo2}
                            alt="Companies illustration"
                            className="h-[70px]"
                          />)}
            </div>
          </div>
          <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal mb-4">
            Every project we deliver comes with full system understanding for your internal team, not just working code
          </p>
          <div className="flex justify-center items-center mb-4">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="p-2 border rounded-lg w-[494px] h-[60px] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-[#821AEA] text-white p-2 rounded-lg w-[109px] h-[42px] hover:bg-purple-600 transition duration-300">
              Subscribe
            </button>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white rounded-full h-[50px] hover:text-green-700 transition duration-300">
              <span className="sr-only">WhatsApp</span>
               {whatsapp && (
                          <GatsbyImage
                            image={whatsapp}
                            alt="Companies illustration"
                            className="h-[31px] w-[31px]"
                          />)}
            </a>
            <a href="#" className="text-pink-500  h-[50px] hover:text-pink-700 transition duration-300">
              <span className="sr-only">Instagram</span>
           {instagram && (
                          <GatsbyImage
                            image={instagram}
                            alt="Companies illustration"
                            className="h-[31px] w-[31px]"
                          />)}
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
              <span className="sr-only">Facebook</span>
             {facebook && (
                          <GatsbyImage
                            image={facebook}
                            alt="Companies illustration"
                            className="h-[31px] w-[31px]"
                          />)}
            </a>
          </div>
          <div className='border-b border-bg-[#E5E5E5] '></div>
          <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal pt-5">
            © 2023 Col'n Rows. All Rights Reserved.
          </p>
        </footer>
    </div>
  );
};

export default Freequote;