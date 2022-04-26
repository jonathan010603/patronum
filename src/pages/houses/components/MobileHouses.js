import { useState } from "react";
import PageContainer from "../../../components/PageContainer";
import HouseContainer from "./HouseContainer";
import HousesArray from "../../../utils/HousesArray";
import CarouselArrows from "../../../components/CarouselArrows";

const MobileHouses = () => {
  const [currentHouse, setCurrentHouse] = useState(0);

  const PrevHouse = () => {
    if (currentHouse === 0) {
      setCurrentHouse(3);
    } else {
      setCurrentHouse(currentHouse - 1);
    }
  };

  const NextHouse = () => {
    if (currentHouse === 3) {
      setCurrentHouse(0);
    } else {
      setCurrentHouse(currentHouse + 1);
    }
  };

  return (
    <>
      <CarouselArrows next={NextHouse} prev={PrevHouse} />
      <PageContainer bgColor="white" flexDirection="row">
        <HouseContainer
          width="100%"
          houseName={HousesArray[currentHouse].name}
          bgColor={HousesArray[currentHouse].bg}
          houseLogo={HousesArray[currentHouse].logo}
        />
      </PageContainer>
    </>
  );
};

export default MobileHouses;
