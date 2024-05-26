import styled from "styled-components";
import Hero from "./Hero";
import { SECTIONS, SPEED } from "../../app/constants/animation";

const StyledLandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${SECTIONS * SPEED * 100}dvh;
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Hero />
    </StyledLandingPage>
  );
};

export default LandingPage;
