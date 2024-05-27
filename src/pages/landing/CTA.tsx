import styled from "styled-components";
import EmailSignup from "../../components/EmailSignup";

const ShowHide = styled.div<{ $show: boolean }>`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.5s;
`;
const PseudoPage = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2.4rem 0;
  z-index: 1;
`;

const Content = styled.div`
  width: 60%;
  padding-left: 10vw;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`;

const HeaderText = styled(ShowHide)`
  font-size: 8rem;
  color: var(--bg);
  font-weight: 500;
  text-transform: uppercase;

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
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

interface Props {
  percent: number;
}

const CTA = ({ percent }: Props) => {
  return (
    <PseudoPage>
      <Content>
        <HeaderText $show={percent > 0.1}>
          join the new era of creator economy
        </HeaderText>
        <SubHeader $show={percent > 0.1}>
          Sign up to get early access to the Shards platform and start building
          your community today.
        </SubHeader>
        <EmailSignup />
      </Content>
    </PseudoPage>
  );
};

export default CTA;
