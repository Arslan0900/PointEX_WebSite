import React from 'react'
import { useTranslation } from 'react-i18next';

const Feature = () => {
  const [t, i18n] = useTranslation("global");
  // const currentLanguage = i18n.resolvedLanguage;
  return (
    <>
    <div className='Feature'>
    <div className='feature_text' >
      <div className="text1">{t("feature.body")}</div>
      <div className="text2"><h1>{t("feature.heading")}</h1></div>
    </div>
    <div className='feature_box'>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-database-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>{t("feature.heading_box1")}</h4></div>
          <div className="box_text_p"><p>{t("feature.description_box1")}</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-ringing-Phone-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>{t("feature.heading_box2")}</h4></div>
          <div className="box_text_p"><p>{t("feature.description_box2")}</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/coin-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>{t("feature.heading_box3")}</h4></div>
          <div className="box_text_p"><p>{t("feature.description_box3")}</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-gift-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>{t("feature.heading_box4")}</h4></div>
          <div className="box_text_p"><p>{t("feature.description_box4")}</p></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Feature