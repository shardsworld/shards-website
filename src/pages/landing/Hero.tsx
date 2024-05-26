import styled from "styled-components";
import Header from "../../components/Header";

const ShowHide = styled.div<{ $show: boolean }>`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.5s;
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

interface Props {
  percent: number;
}

const Hero = ({ percent }: Props) => {
  return (
    <PseudoPage>
      <Content>
        <Header />
        <Block>
          <HeaderText $show={percent < 0.1}>
            Your Stake in Creativity
          </HeaderText>
          <SubHeader $show={percent < 0.1}>
            Support your favorite creators and become a meaningful part of their
            creative journey
          </SubHeader>
        </Block>
        <Floor />
      </Content>
    </PseudoPage>
  );
};

export default Hero;
