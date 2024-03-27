import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    if (newLanguage === "en") {
      document.body.style.direction = "ltr";
    } else {
      document.body.style.direction = "rtl";
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Close navbar only if viewport width is greater than 768 pixels
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
