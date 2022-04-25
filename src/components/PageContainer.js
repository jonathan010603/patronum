import styled from "styled-components";

const PageContainer = (props) => {
  const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: ${props.flexDirection};
    width: 100%;
    height: 90vh;
    background-image: ${props.bgColor};
    overflow: auto;
  `;
  return <StyledPageContainer>{props.children}</StyledPageContainer>;
};

export default PageContainer;
