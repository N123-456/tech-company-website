import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const TechStack = () => {
  const data = useStaticQuery(graphql`
    query {
      angular: file(relativePath: { eq: "angular.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      flutter: file(relativePath: { eq: "flutter.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
    react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
    firebase: file(relativePath: { eq: "firebase.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      dolphin: file(relativePath: { eq: "dolphin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      salesforce: file(relativePath: { eq: "salesforce.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      next: file(relativePath: { eq: "next.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      Group: file(relativePath: { eq: "Group.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      laravel: file(relativePath: { eq: "laravel.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      js: file(relativePath: { eq: "js.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      ts: file(relativePath: { eq: "ts.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      microsoft: file(relativePath: { eq: "microsoft.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      c: file(relativePath: { eq: "c.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      dotnet: file(relativePath: { eq: "dotnet.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      mongodb: file(relativePath: { eq: "mongodb.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      microsoft2: file(relativePath: { eq: "microsoft2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      wordpress: file(relativePath: { eq: "wordpress.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, placeholder: BLURRED)
        }
      }
      
    }
  `);

  const techLogos = [
    { name: "angular", image: getImage(data.angular) },
    { name: "flutter", image: getImage(data.flutter) },
    { name: "react", image: getImage(data.react) },
    { name: "firebase", image: getImage(data.firebase) },
    { name: "dolphin", image: getImage(data.dolphin) },
    { name: "salesforce", image: getImage(data.salesforce) },
    { name: "next", image: getImage(data.next) },
    { name: "Group", image: getImage(data.Group) },
    { name: "laravel", image: getImage(data.laravel) },
    { name: "js", image: getImage(data.js) },
    { name: "ts", image: getImage(data.ts) },
    { name: "microsoft", image: getImage(data.microsoft) },
    { name: "c", image: getImage(data.c) },
    { name: "dotnet", image: getImage(data.dotnet) },
     { name: "mongodb", image: getImage(data.mongodb) },
    { name: "microsoft2", image: getImage(data.microsoft2) },
     
    { name: "gatsby", image: getImage(data.gatsby) },
    { name: "wordpress", image: getImage(data.wordpress) },
  ].filter(tech => tech.image);

  return (
    <div className=" mx-auto p-6 bg-gray-50">
      <h2 className="text-[32px] font-medium text-center font-Outfit text-[#000000] mb-8 ">Technologies that we use</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 space-x-1 justify-items-center">
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4  transform transition duration-300 hover:scale-110 hover:shadow-lg animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
       {tech.image ? (
              <GatsbyImage image={tech.image} alt={tech.name} className="h-17 w-17 object-contain" />
            ) : (
              <span className="text-gray-400">Image not found</span>
            )}
      </div>
        ))}
    </div>
    
    </div>

    
  );
};

export default TechStack;