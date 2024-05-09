import styled from "styled-components";

import bg from "../../assets/backgrounds/hero-bg.png";
import EmailSignup from "../../components/EmailSignup";
import Header from "../../components/Header";

const StyledHero = styled.div`
  position: relative;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100dvw;
  height: 100%;
  min-height: 100dvh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 100rem;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
`;

const HeaderText = styled.h1`
  font-size: 9.5rem;
  color: var(--bg);
  font-weight: 500;
  text-transform: uppercase;
`;

const SubHeader = styled.h2`
  font-size: 1.8rem;
  color: var(--bg);
  font-weight: 400;
  line-height: 1.5;
  width: 42%;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Background src={bg} alt="background" />
      <Content>
        <Header />
        <Block>
          <HeaderText>Your Stake in Creativity</HeaderText>
          <SubHeader>
            Support your favorite creators and become a meaningful part of their
            creative journey
          </SubHeader>
          <div>
            <EmailSignup />
          </div>
        </Block>
        <div />
      </Content>
    </StyledHero>
  );
};

export default Hero;
