import React from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  return (
    <div className="pr-container">
      <form>
        <h3>Profile Details</h3>
        <label htmlFor="avatar">
          <input type="file" accept=".png, .jpeg, .jpg" hidden />
          <img src={assets.avatar_icon} alt="" />
          Upload your profile image
        </label>
        <input type="text" placeholder="Your name" required />
        <textarea placeholder="write a bio" required />
        <button>Save</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
