"use-client";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Freequote = ({ quoteRef }) => {
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
        tlogo: file(relativePath: { eq: "tlogo.png" }) {
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
  const tlogo = getImage(data.tlogo);
  const whatsapp = getImage(data.whatsapp);
  const instagram = getImage(data.instagram);
  const facebook = getImage(data.facebook);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;
    const formData = new FormData(form.current);
    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const message = formData.get("message") as string;

    emailjs
      .sendForm(
        "service_fpm1r1l",
        "template_hzev9nv",
        form.current,
        "BkqwK6VYhap8ZVCuT"
      )
      .then(() => {
        alert("Message sent successfully!");
        const existing = JSON.parse(
          localStorage.getItem("testimonials") || "[]"
        );
        const newTestimonial = { name, title, feedback: message };
        localStorage.setItem(
          "testimonials",
          JSON.stringify([...existing, newTestimonial])
        );
      })
      .catch(() => alert("Failed to send"));
  };

  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-start bg-white px-4 sm:px-6 lg:px-8">
      <h2 className="text-[32px] font-medium font-Outfit text-[#000000] text-center mb-4 pt-4">
        Get a free quote
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center max-w-full md:w-[1141px] md:h-[519px] bg-white p-4 pt-10 md:space-x-10 space-y-6 md:space-y-0">
        <div className="md:h-[400px] lg:h-auto md:w-1/2 p-6">
          {signin && (
            <GatsbyImage
              image={signin}
              alt="Companies illustration"
              className="mx-auto mb-4 rounded-xl transform transition duration-300 hover:scale-105"
            />
          )}
        </div>

        <div id="quote" ref={quoteRef} className="w-full h-auto md:h-[400px]  md:w-1/2 p-6 bg-white transform transition duration-300">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-2 border rounded h-24"
              required
            />
            <div className="flex md:pl-[240px] justify-end">
              <button
                type="submit"
                className="w-[153px] h-[42px] lg:text-[15px] md:text-[10px] bg-[#821AEA] text-white font-Outfit font-normal p-2 rounded-xl hover:bg-purple-700 transition duration-300"
              >
                Get a free quote
              </button>
            </div>
          </form>
        </div>
      </div>
      
      </div>
      <div className="pt-10 w-[100%]">
        <footer className="bg-gray-100 rounded-lg p-4 text-center  shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <div>
              {tlogo && (
                <GatsbyImage image={tlogo} alt="Logo"  />
              )}
            </div>
          </div>

          <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal mb-4">
            Every project we deliver comes with full system understanding for
            your internal team, not just working code
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mb-4 space-y-4  md:space-y-0 md:space-x-4">
           <div className="relative w-full md:w-[494px]">
    <input
      type="email"
      placeholder="Subscribe to our newsletter"
      className="p-4 pr-[120px] border rounded-lg w-full h-[60px] focus:outline-none focus:ring-2 focus:ring-purple-500"
    
    />
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#821AEA] text-white px-4 py-2 rounded-lg h-[42px] hover:bg-purple-600 transition duration-300"
    >
      Subscribe
    </button></div>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="#"
              className="text-white rounded-full h-[50px] hover:text-green-700 transition duration-300"
            >
              <span className="sr-only">WhatsApp</span>
              {whatsapp && (
                <GatsbyImage
                  image={whatsapp}
                  alt="WhatsApp"
                  className="h-[31px] w-[31px]"
                />
              )}
            </a>
            <a
              href="#"
              className="text-pink-500 h-[50px] hover:text-pink-700 transition duration-300"
            >
              <span className="sr-only">Instagram</span>
              {instagram && (
                <GatsbyImage
                  image={instagram}
                  alt="Instagram"
                  className="h-[31px] w-[31px]"
                />
              )}
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <span className="sr-only">Facebook</span>
              {facebook && (
                <GatsbyImage
                  image={facebook}
                  alt="Facebook"
                  className="h-[31px] w-[31px]"
                />
              )}
            </a>
          </div>

          <div className="border-b border-bg-[#E5E5E5] "></div>
          <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal pt-5">
             © {new Date().getFullYear()} Col'n Rows. All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Freequote;
