import { useEffect } from "react";

const useScrollToQuote = (quoteRef) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToQuote = () => {
      if (quoteRef.current) {
        quoteRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (window.location.hash === "#quote") {
      // Wait until next paint after mount
      requestAnimationFrame(() => {
        setTimeout(scrollToQuote, 100); // reduced delay
      });
    }
  }, [quoteRef]);
};

export default useScrollToQuote;
