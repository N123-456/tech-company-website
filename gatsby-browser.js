import './src/styles/global.css'
import React from "react";
import './src/utils/fontawesome';

export const onClientEntry = () => {
  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/your-kit-id.js";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
};
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
     <link
      rel="icon"
      href="/logo2.png"
      type="image/png"
      key="favicon"
    />,
    <link
      key="preconnect-googleapis"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="google-font-outfit"
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
      rel="stylesheet"
    />,
  ]);
};

export const wrapPageElement = () => {
  return ;
};