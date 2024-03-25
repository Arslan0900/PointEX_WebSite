import React from "react";

const BecomeAPartner = () => {
  return (
    <div className="becomeAPartner">
      <div className="section_header">
        <div className="title">
          <p>Elevating Excellence Together</p>
          <h2>Meet Our Valued Partners!</h2>
        </div>
        <div className="Action_btn">Become a partner</div>
      </div>
      <div className="frame">
        <div className="frame1">
          <div className="frame1_text_box">
            <div className="frame1_first__text_box">
              <div className="line"></div>
              <div className="f1_text_box">
                <h3>About..</h3>
                <p>AlFursan members enjoy a world of benefits: reward tickets, lounge access, extra luggage, priority wait-listing, and more. Plus, as a Saudia SkyTeam member, you can earn and redeem miles globally. Explore offers from our exclusive partners, including SkyTeam airlines, banks, hotels, car rentals, and telecom, to boost your miles and enhance your AlFursan experience.</p>
              </div>
            </div>
            <div className="frame1_second__text_box">
                <div className="line"></div>
                <div className="f1_sec_text_box">
                    <h3>How to gain points?</h3>
                    <p>Join AlFursan for exclusive rewards, lounge access, extra baggage, and faster holiday redemptions with Silver and Gold Tiers.</p>
                </div>
            </div>
          </div>
          <div className="frame1_img_box">
            <img src="./Assets/pointex-plane.png" alt="" />
          </div>
        </div>
        <div className="frame2">
          <img src="./Assets/Alfursan-01.svg" alt="" className="" />
          <img src="./Assets/364918.svg" alt="" className="" />
          <img style={{objectFit: "contain"}} src="./Assets/Zain__Unternehmen__logo.svg" alt="" className="" />
          <img src="./Assets/logo.png" alt="" className="" />
          <img src="./Assets/366497.svg" alt="" className="" />
          <img src="./Assets/366426.svg" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;
