import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Vivek B V <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="Help" alt="" />
      </div>
      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">What the hell man send me the notes now!!!🙄</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>6:24pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>6:24pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>6:24pm</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>6:24pm</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Wait im busy right now and i want to do some work
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>6:55pm</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type here ..." />
        <input type="file" id="image" accept="image/png. image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt=" " />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
};

export default ChatBox;
