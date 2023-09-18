import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Telegram from "@mui/icons-material/Telegram";
import Email from "@mui/icons-material/Email";
import Smartphone from "@mui/icons-material/Smartphone";

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <nav className={css.header}>
        <ul className={css.headerNav}>
          <li>
            <NavLink className={css.link} to="/">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
        <div>
          <ul className={css.contactsList}>
            <li>
              <a
                href="tel:+380000000000"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Smartphone fontSize="small" />
                +380000000000
              </a>
            </li>
            <li>
              <a
                href="mailto:example@mail.ua"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Email fontSize="small" />
                example@mail.ua
              </a>
            </li>

            <li>
              <a href="https://t.me/" target="_blank" rel="noreferrer noopener">
                <Telegram fontSize="small" />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
