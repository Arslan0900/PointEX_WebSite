import React from 'react'

const Feature = () => {
  return (
    <>
    <div className='Feature'>
    <div className='feature_text' >
      <div className="text1">Discover the Heartbeat of your rewards</div>
      <div className="text2"><h1>Features</h1></div>
    </div>
    <div className='feature_box'>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-database-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>All-in-one Hub</h4></div>
          <div className="box_text_p"><p>Consolidate your points from multiple partners here, providing a comprehensive 360-degree view.</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-ringing-Phone-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>Your Phone Number is the Key</h4></div>
          <div className="box_text_p"><p>With your mobile number, you can perform a range of actions: register, transfer, and earn!</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/coin-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>Earn from All & transfer to Any</h4></div>
          <div className="box_text_p"><p>Effortlessly earn rewards from all registered partners and redeem them with any of them.</p></div>
        </div>
      </div>
      <div className="box">
        <div className="box_svg"><img src="./Assets/pointex-gift-svg.gif" alt="" /></div>
        <div className="box_text">
          <div className="box_text_h"><h4>Voucher Friendly</h4></div>
          <div className="box_text_p"><p>Generate and utilize valuable vouchers that are accepted by a wide range of partners.</p></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Feature