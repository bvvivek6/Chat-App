import React from "react";
import "./LeftSideBar.css";
import assets from "../../assets/assets";

const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="Logo" className="ls-logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="Menu" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Log Out</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="ls-list">
        {Array(10)
          .fill("")
          .map((items, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="User" />
              <div>
                <p>Friend {index + 1}</p>
                <span span>Hey there! I am using Chat App.</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
