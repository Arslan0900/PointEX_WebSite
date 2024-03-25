import React from "react";
import { useTranslation } from "react-i18next";

const HowItsWork = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="howItswork">
        <div className="howItswork_text">
          <div className="text1">{t("howItswork.paragraph")}</div>
          <div className="text2">
            <h2>{t("howItswork.heading")}</h2>
          </div>
        </div>
        <div className="howItswork_box">
          <div className="box">
            <div className="number_box">
              <p className="p1">1</p>
            </div>
            <div className="text_icon_box1">
              <div className="icon_box"></div>
              <div className="text_box">
                <h3>{t("howItswork.box1_heading")}</h3>
                <p>{t("howItswork.box1_text")}</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="number_box">
              <p className="p2">2</p>
            </div>
            <div className="text_icon_box2">
              <div className="icon_box"></div>
              <div className="text_box">
              <h3>{t("howItswork.box2_heading")}</h3>
                <p>{t("howItswork.box2_text")}</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="number_box">
              <p className="p3">3</p>
            </div>
            <div className="text_icon_box3">
              <div className="icon_box"></div>
              <div className="text_box">
              <h3>{t("howItswork.box3_heading")}</h3>
                <p>{t("howItswork.box3_text")}</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="number_box">
              <p className="p4">4</p>
            </div>
            <div className="text_icon_box4">
              <div className="icon_box"></div>
              <div className="text_box">
              <h3>{t("howItswork.box4_heading")}</h3>
                <p>{t("howItswork.box4_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItsWork;
