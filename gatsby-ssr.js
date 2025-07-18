import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />,
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
