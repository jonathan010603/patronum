import { useEffect, useState } from "react";
import styled from "styled-components";
import PageContainer from "../../../components/PageContainer";

const HouseInfo = (props) => {

    const [currentInfo, setCurrentInfo] = useState(0);

    const arrowStyleLeft = {
        zIndex: 999,
        position: 'absolute',
        height: '60px',
        width: '60px',
        top: '50%',
        left: 0
    }

    const arrowStyleRight = {
        zIndex: 999,
        position: 'absolute',
        height: '60px',
        width: '60px',
        top: '50%',
        right: 0
    }

    const PrevInfo = () => {
        if(currentInfo === 0) { setCurrentInfo(3) }
        else { setCurrentInfo(currentInfo - 1) }
    }

    const NextInfo = () => {
        if(currentInfo === 3) { setCurrentInfo(0) }
        else { setCurrentInfo(currentInfo + 1) }
    }

    const HouseName = styled.h1`
        color: white;
        font-size: 3rem;
        margin: 0 auto;
    `

    const HouseLogo = styled.img`
        height: 30vw;
    `

    const SortingHat = styled.p`
        color: white;
        text-align: justify;
        width: 60vw;
        font-size: 1.8rem;
        align-self: center;
    `

    const Desc = styled.p`
        color: white;
        text-align: justify;
        width: 60vw;
        font-size: 1.8rem;
        align-self: center;
    `

    const Characteristics = styled.p`

    `

    const Info = [
        [
            <>
                <HouseLogo src={props.houseInfoPack.logo}/>
                <SortingHat>"{props.houseInfoPack.sortingHat}"</SortingHat>
            </>
        ],
        [
            <>
                <Desc>{props.houseInfoPack.description}</Desc>
            </>
        ],
        [
            <>
                <Desc>{props.houseInfoPack.characteristics}</Desc>
            </>
        ],
    ]

    return (
        <PageContainer bgColor={props.houseInfoPack.bg} flexDirection="column">
            <img src="/left.svg" style={arrowStyleLeft} onClick={ () => {PrevInfo() }}/>
            <img src="/right.svg" style={arrowStyleRight} onClick={ () => {NextInfo() }}/>
            <HouseName>{props.houseInfoPack.name}</HouseName>
            {Info[currentInfo]}
        </PageContainer>
    )
}

export default HouseInfo