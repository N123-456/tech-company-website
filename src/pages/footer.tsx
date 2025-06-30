// import React from 'react';
// import { graphql, Link, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// const Footer = () => {
//     const data = useStaticQuery(graphql`
//         query {
//           logo2: file(relativePath: { eq: "logo2.png" }) {
//             childImageSharp {
//               gatsbyImageData(placeholder: BLURRED)
//             }
//           }
//              whatsapp: file(relativePath: { eq: "whatsapp.png" }) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED)
//         }
//       }
//       instagram: file(relativePath: { eq: "instagram.png" }) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED)
//         }
//       }
//       facebook: file(relativePath: { eq: "facebook.png" }) {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED)
//         }
//       }
//         }
//       `);
//        const logo2 = getImage(data.logo2);
//        const whatsapp = getImage(data.whatsapp);
//          const instagram = getImage(data.instagram);
//          const facebook = getImage(data.facebook);
//   return (
//      <div className="pt-10">

//       <footer className="bg-gray-100 rounded-lg p-4 text-center w-full max-w-[1301px] shadow-lg">
//         <div className="flex justify-center items-center mb-4">
//           <div>
//             {logo2 && (
//               <GatsbyImage image={logo2} alt="Logo" className="h-[70px]" />
//             )}
//           </div>
//         </div>

//         <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal mb-4">
//           Every project we deliver comes with full system understanding for your
//           internal team, not just working code
//         </p>

//         <div className="flex flex-col md:flex-row justify-center items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
//           <input
//             type="email"
//             placeholder="Subscribe to our newsletter"
//             className="p-2 border rounded-lg w-full md:w-[494px] h-[60px] focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button className="bg-[#821AEA] text-white p-2 rounded-lg w-full md:w-[109px] h-[42px] hover:bg-purple-600 transition duration-300">
//             Subscribe
//           </button>
//         </div>

//         <div className="flex justify-center space-x-4 mb-4">
//           <a
//             href="#"
//             className="text-white rounded-full h-[50px] hover:text-green-700 transition duration-300"
//           >
//             <span className="sr-only">WhatsApp</span>
//             {whatsapp && (
//               <GatsbyImage
//                 image={whatsapp}
//                 alt="WhatsApp"
//                 className="h-[31px] w-[31px]"
//               />
//             )}
//           </a>
//           <a
//             href="#"
//             className="text-pink-500 h-[50px] hover:text-pink-700 transition duration-300"
//           >
//             <span className="sr-only">Instagram</span>
//             {instagram && (
//               <GatsbyImage
//                 image={instagram}
//                 alt="Instagram"
//                 className="h-[31px] w-[31px]"
//               />
//             )}
//           </a>
//           <a
//             href="#"
//             className="text-blue-500 hover:text-blue-700 transition duration-300"
//           >
//             <span className="sr-only">Facebook</span>
//             {facebook && (
//               <GatsbyImage
//                 image={facebook}
//                 alt="Facebook"
//                 className="h-[31px] w-[31px]"
//               />
//             )}
//           </a>
//         </div>

//         <div className="border-b border-bg-[#E5E5E5] "></div>
//         <p className="text-[#4A4A4A] text-[15px] font-Outfit font-normal pt-5">
//           © 2023 Col'n Rows. All Rights Reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Footer;