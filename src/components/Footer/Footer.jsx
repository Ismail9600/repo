import React from "react";
import Typography from "@mui/material/Typography";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        className="logo"
        sx={{
          display: "flex",
          fontWeight: 700,
          fontSize: "28px",
          color: "#31B787",
          fontFamily: "Amaranth",
          textDecoration: "none",
          marginRigh: "1%",
          paddingLeft: "0",
        }}>
        NANNY.KG
      </Typography>
      <ul className="footerUl">
        <a
          href="https://www.google.com/intl/ru/gmail/about/"
          className="footerLi">
          <li className="footerLi">Nannykg@gmail.com</li>
        </a>
        <a href="https://www.instagram.com/" className="footerLi">
          <li className="footerLi">INSTAGRAM</li>
        </a>
        <a href="https://2gis.kg/bishkek" className="footerLi">
          <li className="footerLi">2GIS</li>
        </a>
        <a href="https://www.whatsapp.com/?lang=ru" className="footerLi">
          <li className="footerLi">+996 000 00 00 00</li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
