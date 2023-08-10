import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom"

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();



  const transitionNavbar = () => {
    if (window.scrollY) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
        onClick={()=> history('/', {push: true})}
          className="nav__logo"
          src="https://logolook.net/wp-content/uploads/2021/11/Netflix-Logo.svg"
          alt=""
        />

        <img
          onClick={()=> history('/profile', {push : true})}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
