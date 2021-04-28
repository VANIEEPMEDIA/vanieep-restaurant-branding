import React from "react";
import "./index.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Header = ({ translationClick, isChinese }) => {
  return (
    <header className="flex-center app-header">
      <div className="translation">
        <FormControlLabel
          control={
            <Switch
              checked={isChinese}
              onChange={translationClick}
              color="primary"
              name="translation"
              inputProps={{ "aria-label": "translation" }}
            />
          }
          label={"中文"}
        />
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
