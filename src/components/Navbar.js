import styled from "styled-components";
import { useEffect, useState } from "react";
import "./general.css";
import Logo from "./Logo";
import { NavLinks } from "./navbar/NavbarComps";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Houses", link: "/houses" },
    { name: "Characters", link: "/characters" },
    { name: "Spells", link: "/spells" },
    { name: "Creatures", link: "/creatures" },
    { name: "Places", link: "/places" }
  ];

  const [mobile, setMobile] = useState(true);
  const [open, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const NavUl = styled.ul`
    z-index: ${mobile ? 999 : 996};
    list-style-type: none;
    display: flex;
    flex-direction: ${mobile ? "column" : "row"};
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: ${mobile && open ? "10vh" : mobile ? "-1000px" : 0};
    position: ${mobile ? "absolute" : "static"};
    background-color: ${mobile && props.bgColor};
    width: 100%;
  `;

  let menuIcon = {
    zIndex: 999,
    position: "absolute",
    height: "10vh",
    width: "10vh",
    alignSelf: "center",
    right: 0
  };

  let NavStyle = {
    width: "100%",
    minHeight: "10vh",
    backgroundColor: props.bgColor,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 998
  };

  return (
    <nav style={NavStyle}>
      <Logo image="/logo-cropped.svg" />
      {mobile ? (
        <img
          src={open ? "/close.png" : "/menu.png"}
          style={menuIcon}
          onClick={() => {
            setOpen(!open);
          }}
        />
      ) : null}
      <NavUl>
        {Links.map((link) => (
          <NavLinks>
            <a href={link.link}>{link.name}</a>
          </NavLinks>
        ))}
      </NavUl>
    </nav>
  );
};

export default Navbar;
