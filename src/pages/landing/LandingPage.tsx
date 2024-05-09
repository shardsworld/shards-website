import styled from "styled-components";
import Hero from "./Hero";

const StyledLandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Hero />
    </StyledLandingPage>
  );
};

export default LandingPage;
