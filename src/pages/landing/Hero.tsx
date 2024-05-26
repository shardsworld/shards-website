import styled from "styled-components";

import hero from "../../assets/backgrounds/hero-bg-tall.png";
import heroOverlay from "../../assets/backgrounds/overlay-tall.png";
import logo from "../../assets/logo/logo.svg";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { SECTIONS, SPEED } from "../../app/constants/animation";

const ShowHide = styled.div<{ $show: boolean }>`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.5s;
`;

const StyledHero = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 300dvh;
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

const PseudoPage = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0;
  border: 1px solid red;
  z-index: 1;
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
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  @media (max-width: 900px) {
    min-width: none;
    width: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1.5rem;
`;

const HeaderText = styled(ShowHide)`
  font-size: 9.5rem;
  color: var(--bg);
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 5rem;
    text-align: center;
  }
`;

const SubHeader = styled(ShowHide)`
  font-size: 1.8rem;
  color: var(--bg);
  font-weight: 400;
  line-height: 1.5;
  width: 42%;
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

const Floor = styled.div`
  width: 100%;
  height: 10dvh;
`;

const ShardsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Shard = styled.img`
  height: 20rem;
`;

const ShardText = styled.div`
  font-size: 20rem;
  font-weight: 500;
  margin-left: 2.4rem;
  color: var(--bg);
  text-transform: uppercase;
`;

const Hero = () => {
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
    <StyledHero
      style={{
        transform: `translate(${-percents[0] * (100 / 2)}%, ${
          (percents[2] + percents[3]) * (100 / 3)
        }%)`,
      }}
    >
      <Background src={hero} alt="background" />
      <PseudoPage>
        <Content>
          <Header />
          <Block>
            <HeaderText $show={percents[0] < 0.1}>
              Your Stake in Creativity
            </HeaderText>
            <SubHeader $show={percents[0] < 0.1}>
              Support your favorite creators and become a meaningful part of
              their creative journey
            </SubHeader>
          </Block>
          <Floor />
        </Content>
      </PseudoPage>

      <VerticalPageContainer>
        <PseudoPage>meow</PseudoPage>
        <PseudoPage>meow</PseudoPage>
        <PseudoPage>
          <Content>
            <div />
            <ShardsContainer
              style={{
                transform: `translateY(${
                  Math.max(1 - percents[1] * 1.5, 0) * 200
                }%)`,
              }}
            >
              <Shard src={logo} alt="shard" />
              <ShardText>shards</ShardText>
            </ShardsContainer>
            <Floor />
          </Content>
        </PseudoPage>
      </VerticalPageContainer>
      <BackgroundOverlay src={heroOverlay} alt="background" />
    </StyledHero>
  );
};

export default Hero;
