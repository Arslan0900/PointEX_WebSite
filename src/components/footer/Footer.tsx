import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState("en");
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


  return (
    <div className="Footer">
      <div className="footer_frame">
        <div className="logo"><h2><span>Point</span>EX</h2></div>
        <div className="nav">
          <ul>
            <li>{t("NavItems.Our Products")}</li>
            <li>Download App</li>
            <li>Terms & conditions</li>
            <li>{t("NavItems.become a Partner!")}</li>
            <li>{t("NavItems.Contect us")}</li>
            <p onClick={() => { handleChangeLanguage(); }}>{currentLanguage === "en" ? "العربية" : "English"}</p>
          </ul>
        </div>
        <div className="social_links_frame">
          <img src="./Assets/instagram_icon.png" alt="" />
          <img src="./Assets/tweeter_icon.png" alt="" />
          <img src="./Assets/linked_in_icon.png" alt="" />
        </div>
      </div>
      <div className="vector">
        <p></p>
      </div>
      <div className="copyright">
        <p>© 2023 PointEx Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
