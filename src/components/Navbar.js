import styled from 'styled-components';
import { useEffect, useState } from 'react';
import "./general.css";
import Logo from './Logo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Navbar = (props) => {
    let Links = [
        { name: "Home", link: "/"},
        { name: "Houses", link: "/houses" },
        { name: "Characters", link: "/characters" },
        { name: "Spells", link: "/spells" },
        { name: "Creatures", link: "/creatures" },
        { name: "Places", link: "/places" }
    ];

    const [mobile, setMobile] = useState(true);
    const [open, setOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 800) { setMobile(true) }
        else { setMobile(false); setOpen(false) }
    }
    
    useEffect(() => { window.addEventListener("resize", handleResize) })

    const StyledNavbar = styled.nav`
        width: 100%;
        min-height: 10vh;
        background-color: ${props.bgColor};
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        z-index: 998;
    `

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
        background-color: ${mobile ? props.bgColor : "none"};
        width: 100%;
    `

    const NavLinks = styled.li`

        @media(max-width: 480px) {
            font-size: 2rem;
        }

        @media(min-width: 481px) {
            font-size: 2.5rem;
        }

        @media(min-width: 600px) {
            font-size: 3rem;
        }

        @media(min-width: 700px) {
            font-size: 2rem;
            margin: 0 2%;
        }

        @media(min-width: 800px) {
            font-size: 1.5rem;
            margin: 0 2%;
        }

        @media(min-width: 1000px) {
            font-size: 2rem;
            margin: 0 2%;
        }
    `

    let menuIcon = {
        zIndex: 999,
        position: 'absolute',
        height: '10vh',
        width: '10vh',
        alignSelf: 'center',
        right: 0
    }

    return  (
        <StyledNavbar>
            <Logo image="/logo.svg"/>
            {mobile ? <img src={open ? "/close.png" : "/menu.png"} style={menuIcon} onClick={()=>{setOpen(!open)}}/> : null} 
            <NavUl>
                {Links.map((link) => (
                    <NavLinks>
                        <a href={link.link}>
                            {link.name}
                        </a>
                    </NavLinks>
                ))}
            </NavUl>
        </StyledNavbar>
    );
}

export default Navbar;