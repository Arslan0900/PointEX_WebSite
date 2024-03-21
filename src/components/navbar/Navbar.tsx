import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to manage navbar visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll position

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    if (newLanguage === "en") {
      // Change body direction to LTR for English
      document.body.style.direction = "ltr";
    } else {
      // Change body direction to RTL for Arabic
      document.body.style.direction = "rtl";
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleScroll = () => {
    // If scroll position is greater than 0, set isScrolled to true, otherwise set it to false
    setIsScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    // Function to handle viewport width change
    const handleResize = () => {
      // Close navbar when viewport width changes
      setIsNavbarOpen(!isNavbarOpen);
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once on component mount

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once on component mount

  return (
    <div className={`navbar second ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-hamburger-container">
        <div className="logo"><h1>PointEX</h1></div>
        <div className="hamburger" onClick={toggleNavbar}><button>burger</button></div>
      </div>
      <div className={`nav_items ${isNavbarOpen ? 'nav-open' : ''}`}>
        <ul>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.Our Products")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.How is works?")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.Feature")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.Partners")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.Stories")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.become a Partner!")}</p>
          </li>
          <li className="menuNavigation">
            <p onClick={toggleNavbar}>{t("NavItems.Contect us")}</p>
          </li>
          <li className="menuNavigation8">
            <p onClick={() => { handleChangeLanguage(); }}>{currentLanguage === "en" ? "العربية" : "English"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
