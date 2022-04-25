import { useState } from "react";
import PageContainer from "../../../components/PageContainer";
import HouseContainer from "./HouseContainer";
import HousesArray from "../../../utils/HousesArray";

const MobileHouses = () => {

    const [currentHouse, setCurrentHouse] = useState(0);

    const arrowStyleLeft = {
        zIndex: 999,
        position: 'absolute',
        height: '60px',
        width: '60px',
        alignSelf: 'center'
    }

    const arrowStyleRight = {
        zIndex: 998,
        position: 'absolute',
        height: '60px',
        width: '60px',
        alignSelf: 'center',
        right: 0
    }

    const PrevHouse = () => {
        if(currentHouse === 0) { setCurrentHouse(3) }
        else { setCurrentHouse(currentHouse - 1) }
    }

    const NextHouse = () => {
        if(currentHouse === 3) { setCurrentHouse(0) }
        else { setCurrentHouse(currentHouse + 1) }
    }

    return(
        <PageContainer bgColor="white" flexDirection="row">
            <img src="/left.svg" style={arrowStyleLeft} onClick={ () => {PrevHouse() }}/>
            <img src="/right.svg" style={arrowStyleRight} onClick={ () => {NextHouse() }}/>
            <HouseContainer width='100%' houseName={HousesArray[currentHouse].name} bgColor={HousesArray[currentHouse].bg} houseLogo={HousesArray[currentHouse].logo}/>
        </PageContainer>
    );
}

export default MobileHouses;