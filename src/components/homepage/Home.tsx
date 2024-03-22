import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const currentLanguage = i18n.resolvedLanguage;
  
  console.log(currentLanguage);

  return (
    <div className="home-container">
        <div className="left-box">
        <div className="text_btn_container">
          <div className="text-box">
            <h2>{t("home.body")}</h2>
          </div>
          <div className="button-box">
            <p>Download App</p>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="phone_img"><img src="./Assets/pointex-phone.png" alt="Phone "/></div>
        <div className="card_img" ><img src={`${currentLanguage === "en" ? ("./Assets/pointex-card.png"):("./Assets/pointex-card-arabic.png")}`} alt="card "/></div>
      </div>
    </div>
  );
};

export default Home;
