import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import style from "./Header.module.css";
import { useFavorite } from "../../hooks/useFavorite";

const Header = () => {
  const favorite = useFavorite();
  return (
    <header className={style.header}>
      <MdOutlineFavoriteBorder style={{ color: "chartreuse" }} />
      <span>{favorite.length}</span>
    </header>
  );
};

export default Header;
