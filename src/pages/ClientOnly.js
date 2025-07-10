import React from "react";

const ClientOnly = ({ children }) => {
  if (typeof window === "undefined") {
    return null; // Don't render anything during SSR
  }

  return <>{children}</>;
};

export default ClientOnly;
