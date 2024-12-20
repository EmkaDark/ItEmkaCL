import React from "react";
import { FaTelegram } from "react-icons/fa";
import "./styles/footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <b className="footer_desc">By Emka Dark</b>
          <a href="https://t.me/EmkaDark" className="footer_link">
            <FaTelegram className="fatel" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
