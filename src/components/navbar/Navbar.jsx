import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/Logo.png";
import profile from "../../assets/profile.png";
import { Rss, Bell, Briefcase, Users, Search, Message, More } from "../icons";
import NavbarIcon from "./icon/NavbarIcon";

const Navbar = () => {
  const [icons] = useState([
    {
      id: 1,
      icon: <Rss />,
      p: "Feed",
      dropdownItems: ["ITEM - 1", "ITEM - 2", "ITEM - 3"],
    },
    { id: 2, icon: <Users />, p: "Network" },
    { id: 3, icon: <Briefcase />, p: "Jobs" },
    { id: 4, icon: <Message />, p: "Chat" },
    { id: 5, icon: <Bell />, p: "Notices" },
  ]);

  const [click, setClick] = useState();
  const handleClick = (iconId) => {
    setClick(iconId);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="linkedin logo" />
      </div>
      <div className="navbar__icons">
        {icons.map((icon) => (
          <NavbarIcon
            icon={icon}
            visited={
              icon.id === click
                ? "navbar__icons--item visited"
                : "navbar__icons--item"
            }
            handleClick={handleClick}
            dropdownItems={icon.dropdownItems}
          >
            {icon.p}
          </NavbarIcon>
        ))}
      </div>
      <form className="search__area">
        <Search />
        <input type="text" placeholder="Search" />
      </form>
      <div className="profile">
        <img className="profile__image" src={profile} alt="profile image" />
        <div className="profile__information">
          <p className="profile__name">D. Kargaev</p>
          <p className="profile__user">You</p>
          <p className="profile__count">367 views today</p>
          <p className="profile__statistic">
            +32 <span>&#8599;</span>
          </p>
        </div>
      </div>
      <div className="other">
        <More />
        <h2>Other</h2>
      </div>
    </nav>
  );
};

export default Navbar;
