import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_frame">
        <div className="logo"><h2><span>Point</span>EX</h2></div>
        <div className="nav">
          <ul>
            <li>Our Product</li>
            <li>Download App</li>
            <li>Terms & conditions</li>
            <li>Become a partner</li>
            <li>Contect Us</li>
            <li>العربية</li>
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
