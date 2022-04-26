import { useEffect, useState } from "react";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
import HouseContainer from "./houses/components/HouseContainer";
import MobileHouses from "./houses/components/MobileHouses";
import HousesArray from "../utils/HousesArray";

const Houses = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return mobile ? (
    <MobileHouses />
  ) : (
    <PageContainer bgColor="white" flexDirection="row">
      {HousesArray.map((house) => (
        <HouseContainer
          houseName={house.name}
          bgColor={house.bg}
          houseLogo={house.logo}
        />
      ))}
    </PageContainer>
  );
};

export default Houses;
