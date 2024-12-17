"use client";

import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //? Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    //? Cleanup the event listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //? Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          isIconOnly
          className="fixed bottom-2 right-2 z-50 duration-300"
          radius="full"
          onClick={scrollToTop}
        >
          ↑
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
