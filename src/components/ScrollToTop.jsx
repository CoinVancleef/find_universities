import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollToUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="top-to-bottom">
      {showButton && (
        <FaAngleUp
          className="icon-position icon-style"
          onClick={() => goToTop()}
        />
      )}
    </div>
  );
}
