import { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselArrows from "../../../components/CarouselArrows";
import PageContainer from "../../../components/PageContainer";

const HouseInfo = (props) => {
  const [currentInfo, setCurrentInfo] = useState(0);

  const PrevInfo = () => {
    if (currentInfo === 0) {
      setCurrentInfo(3);
    } else {
      setCurrentInfo(currentInfo - 1);
    }
  };

  const NextInfo = () => {
    if (currentInfo === 3) {
      setCurrentInfo(0);
    } else {
      setCurrentInfo(currentInfo + 1);
    }
  };

  const HouseName = styled.h1`
    color: white;
    font-size: 3rem;
    margin: 0 auto;
  `;

  const HouseLogo = styled.img`
    height: 30vw;
  `;

  const SortingHatPhrase = styled.p`
    color: white;
    text-align: justify;
    width: 60vw;
    font-size: 1.8rem;
    align-self: center;
  `;

  const Description = styled.p`
    color: white;
    text-align: justify;
    width: 60vw;
    font-size: 1.8rem;
    align-self: center;
  `;

  const Characteristics = styled.p``;

  const Info = [
    [
      <>
        <HouseLogo src={props.houseInfoPack.logo} />
        <SortingHatPhrase>"{props.houseInfoPack.sortingHat}"</SortingHatPhrase>
      </>
    ],
    [
      <>
        <Description>{props.houseInfoPack.description}</Description>
      </>
    ],
    [
      <>
        <Characteristics>{props.houseInfoPack.characteristics}</Characteristics>
      </>
    ]
  ];

  return (
    <PageContainer bgColor={props.houseInfoPack.bg} flexDirection="column">
      <CarouselArrows next={NextInfo} prev={PrevInfo} />
      <HouseName>{props.houseInfoPack.name}</HouseName>
      {Info[currentInfo]}
    </PageContainer>
  );
};

export default HouseInfo;
