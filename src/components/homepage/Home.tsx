import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const currentLanguage = i18n.resolvedLanguage;
  
  console.log(currentLanguage);

  return (
    <div className="home-container">
      {currentLanguage === "ar" ? (
        <>
        <div className="arabic_right_box">
        <div className="arabic_text_btn_container">
          <div className="arabic_text_box">
            <h2>{t("home.body")}</h2>
          </div>
          <div className="arabic_button_box">
            <p>{t("home.btn")}</p>
          </div>
        </div>
      </div>
      <div className="arabic_left_box">
        <div className="arabic_phone_img"><img src="./Assets/pointex-phone.png" alt="arabic Phone "/></div>
        <div className="arabic_card_img" ><img src="./Assets/pointex-card-arabic.png" alt="arabic card "/></div>
      </div>
      </>
      ) : (
        <>
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
        <div className="card_img" ><img src="./Assets/pointex-card.png" alt="card "/></div>
      </div>
      </>
      )}
      
    </div>
  );
};

export default Home;
