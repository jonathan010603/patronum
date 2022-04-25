import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../../components/general.css";

const HouseContainer = (props) => {
    const StyledHouseContainer = styled.div`
        display: flex;
        color: white;
        flex-direction: column;
        align-items: center;
        width: ${props.width ? props.width:'25%'};
        text-align: center;
        background-image: ${props.bgColor};
        overflow: auto;
        cursor: pointer;

        &:hover{
            animation: bright 0.1s forwards;
            animation-direction: alternate;
            -webkit-animation-name: bright;
            animation-name: bright;
        }

        @media(max-width: 480px) {
            font-size: 2.5rem;
            padding-top: 0;
        }

        @media(min-width: 481px) {
            font-size: 3.1rem;
            padding-top: 5%;
        }

        @media(min-width: 600px) {
            font-size: 5rem;
            padding-top: 10%;
        }

        @media(min-width: 800px) {
            font-size: 3rem;
            padding-top: 2%;
        }
    `

    const HouseImg = styled.img`
        
        @media(max-width: 480px) {
            height: 60%;
            width: 70%;
            margin-bottom: 10px;
        }

        @media(min-width: 481px) {
            height: 60%;
            width: 70%;
            margin-bottom: 10px;
        }

        @media(min-width: 600px) {
            height: 70%;
            width: 60%;
            margin-bottom: 10px;
        }

        @media(min-width: 800px) {
            height: 30vw;
            width: 20vw;
            margin-bottom: 10px;
        }
    `

    let navigate = useNavigate(); 
    const EnterHouse = () => { navigate(`/houses/${props.houseName}`) }

    return(
        <StyledHouseContainer onClick={EnterHouse}>
            <HouseImg src={props.houseLogo}/>
            <span>{props.houseName}</span>
        </StyledHouseContainer>
    );
}

export default HouseContainer;