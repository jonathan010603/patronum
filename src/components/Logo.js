import styled from "styled-components";
import "./general.css";

const Title = styled.span`
  color: #e6fdff;

  @media (max-width: 480px) {
    font-size: 8vw;
  }

  @media (min-width: 481px) {
    font-size: 9vw;
  }

  @media (min-width: 800px) {
    font-size: 3vw;
  }
`;

const Logo = (props) => {
  const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    @media (max-width: 800px) {
      justify-content: center;
      align-self: center;
    }

    &:hover {
      animation: bright 0.2s forwards;
      animation-direction: alternate;
      -webkit-animation-name: bright;
      animation-name: bright;
    }
  `;

  const StyledLogo = styled.img`
    @media (max-width: 480px) {
      height: 34px;
      width: 35px;
    }

    @media (min-width: 481px) {
      height: 50px;
      width: 56px;
    }

    @media (min-width: 800px) {
      height: 34px;
      width: 40px;
    }
  `;

  return (
    <LogoDiv>
      <StyledLogo src={props.image} />
      <Title>Patronum</Title>
    </LogoDiv>
  );
};

export default Logo;
