import { useState, useEffect, useRef } from "react";

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    hamburgerRef,
    navLinksRef,
  };
};

export default useMobileMenu;