import "./src/styles/global.css";
import "./src/utils/fontawesome";

export const onClientEntry = () => {
  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/your-kit-id.js";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
};

export const wrapPageElement = () => {
  return;
};
