import styled from "styled-components";
import "./general.css";

const Logo = (props) => {
    const LogoDiv = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        &:hover{
            animation: bright 0.2s forwards;
            animation-direction: alternate;
            -webkit-animation-name: bright;
            animation-name: bright;
        }
    `

    const StyledLogo = styled.img`
        height: 4vw;
        width: 4vw;
    `

    const Title = styled.span`
        color: #e6fdff;
        font-size: 3.5vw;
    `

    return(
        <LogoDiv>
            <StyledLogo src={props.image} />
            <Title>Patronum</Title>
        </LogoDiv>
    );
}

export default Logo;