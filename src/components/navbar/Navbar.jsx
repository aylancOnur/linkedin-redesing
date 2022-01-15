import React, { useState, useEffect } from "react";
import "./navbar.scss";
import logo from "../../assets/Logo.png";
import profile from "../../assets/profile.png";
import { Rss, Bell, Briefcase, Users, Search, Message, More } from "../icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="linkedin logo" />
        </div>
        <div className="navbar__icons">
            <div className="navbar__icons--item">
              <Rss />
              <p className="icon--text">Feed</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

          <div className="navbar__icons--item">
            <Users />
            <p className="icon--text">Network</p>
          </div>
          <div className="navbar__icons--item">
            <Briefcase />
            <p className="icon--text">Jobs</p>
          </div>
          <div className="navbar__icons--item">
            <Message />
            <p className="icon--text">Chat</p>
          </div>
          <div className="navbar__icons--item">
            <Bell />
            <p className="icon--text">Notices</p>
          </div>
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
    </>
  );
};

export default Navbar;
