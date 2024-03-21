import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
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
    <div>
      <h1>
        {t("header.massage")}
      </h1>
      <button onClick={handleChangeLanguage}>
        {currentLanguage === "en" ? "Arabic" : "English"}
      </button>
    </div>
  );
};

export default Header;
