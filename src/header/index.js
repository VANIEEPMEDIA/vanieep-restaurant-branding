import React from "react";
import "./index.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


const Header = ({ children }) => {
  return (
    <header className="flex-center app-header">
      <div className="translation">
        {children}

      </div>
      <div className="header-text">Vanieep Media</div>
      {/* <div className="icon-wrapper">
        <a href="tel:+14155195133" className="icon-holder">
          <AiOutlinePhone className="header-icon header-icon-phone"></AiOutlinePhone>
          <span className="header-icon-text">415-519-5133</span>
        </a>
        <a className="icon-holder" href="mailto:vanieepmedia@gmail.com">
          <AiOutlineMail className="header-icon"></AiOutlineMail>
          <span className="header-icon-text">vanieepmedia@gmail.com</span>
        </a>
      </div> */}
    </header>
  );
};

export default Header;
