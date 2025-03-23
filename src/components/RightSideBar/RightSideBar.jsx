import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assets";

const RightSideBar = () => {
  return (
    <div className="rs">
      <div className="rs-rpofile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Vicky
          <img src={assets.green_dot} />
        </h3>
        <p>Hawk tua, you gotta split on that thing!</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default RightSideBar;
