import React from "react";
import languages from "../../localization/language";
import style from "./footer.module.css";
const Footer = ({lang,setLang}) => {
  return (
    <footer className={style.main}>
      <div className="container">
        <div className={style.nav}>
            <h1 className={style.logo}>{languages[lang].footer.corp}</h1>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
