import React from "react";
import "../../App.css";
import languages from "../../localization/language";
import style from "./header.module.css";
const Header = ({ lang, setLang }) => {
  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav}>
          <h1 className={style.logo}>Todo List</h1>

          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={style.item}>
                {languages[lang].header.nav.navItem1}
              </li>
              <li className={style.item}>
                {languages[lang].header.nav.navItem2}
              </li>
              <li className={style.item}>
                {languages[lang].header.nav.navItem3}
              </li>
              <li className={style.item}>
                {languages[lang].header.nav.navItem4}
              </li>
            </ul>
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value={"uz"}>Uz</option>
              <option value={"ru"}>Ru</option>
              <option value={"en"}>Eng</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
