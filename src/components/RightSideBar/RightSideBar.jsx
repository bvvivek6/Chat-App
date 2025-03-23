import React from "react";
import "./RightSideBar.css";
import assets from "../../assets/assets";

const RightSideBar = () => {
  return (
    <div className="rs">
<<<<<<< HEAD
      <div className="rs-rpofile">
=======
      <div className="rs-profile">
>>>>>>> c00d6ce58353b83eadd0fa5b360499168a00e9a2
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
