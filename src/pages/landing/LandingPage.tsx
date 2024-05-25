import styled from "styled-components";
import Hero from "./Hero";

const StyledLandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 1200dvh;
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Hero />
    </StyledLandingPage>
  );
};

export default LandingPage;
