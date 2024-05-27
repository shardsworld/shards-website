import styled from "styled-components";

import hero from "../../assets/backgrounds/hero-bg-tall.png";
import heroOverlay from "../../assets/backgrounds/overlay.png";
import { useEffect, useState } from "react";
import { SECTIONS, SPEED } from "../../app/constants/animation";
import Hero from "./Hero";
import Field from "./Field";
import Collect from "./Collect";
import Inventory from "./Inventory";
import Use from "./Use";
import CTA from "./CTA";

const StyledLandingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${SECTIONS * SPEED * 100}dvh;
`;

const TransformContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: ${(SECTIONS - 1) * 100}dvh;
  width: 200dvw;
  overflow: hidden;
  display: flex;
  align-items: flex-end;

  transform: translateX(0);
`;

const VerticalPageContainer = styled.div`
  width: 100dvh;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Background = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 900px) {
    min-width: none;
    width: auto;
  }
`;

const BackgroundOverlay = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 64.732142857dvh;
  width: 60.522350577%;
  z-index: 1;

  @media (max-width: 900px) {
    min-width: none;
    width: auto;
  }
`;

const LandingPage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const percents: Record<number, number> = {};
  for (let i = 0; i < SECTIONS; i++) {
    const from = (1 / SECTIONS) * i;
    const to = (1 / SECTIONS) * (i + 1);
    const thisPercent = (scrollPercent - from) / (to - from);
    percents[i] = Math.min(1, Math.max(0, thisPercent));
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = window.innerHeight * SECTIONS * SPEED;
      const scroll = window.scrollY;
      const percent = scroll / (height - window.innerHeight);
      setScrollPercent(percent);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <StyledLandingPage>
      <TransformContainer
        style={{
          transform: `translate(${-percents[0] * (100 / 2)}%, ${
            (percents[2] + percents[3] + percents[4] + percents[5]) * (100 / 5)
          }%)`,
        }}
      >
        <Background src={hero} alt="background" />
        <Hero percent={percents[0]} />

        <VerticalPageContainer>
          <CTA percent={percents[5]} />
          <Field percent={percents[1]} />
          <Use percent={percents[3]} />
          <Collect percent={percents[2]} />
          <Field percent={percents[1]} />
        </VerticalPageContainer>
        <BackgroundOverlay src={heroOverlay} alt="background" />
      </TransformContainer>
      <Inventory />
    </StyledLandingPage>
  );
};

export default LandingPage;
