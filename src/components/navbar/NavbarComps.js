import styled from "styled-components";

const NavLinks = styled.li`
  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 481px) {
    font-size: 2.5rem;
  }

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 700px) {
    font-size: 2rem;
    margin: 0 2%;
  }

  @media (min-width: 800px) {
    font-size: 1.5rem;
    margin: 0 2%;
  }

  @media (min-width: 1000px) {
    font-size: 2rem;
    margin: 0 2%;
  }
`;

const MenuIcon = styled.img`
  z-index: 999;
  position: absolute;
  height: 10vh;
  width: 10vh;
  align-self: center;
  right: 0;
`;

export { NavLinks, MenuIcon };
