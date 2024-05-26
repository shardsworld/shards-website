import styled from "styled-components";

import logo from "../../assets/logo/logo.svg";

const StyledField = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0;
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

interface Props {
  percent: number;
}

const Field = ({ percent }: Props) => {
  return (
    <StyledField>
      <Content>
        <div />
        <ShardsContainer
          style={{
            transform: `translateY(${Math.max(1 - percent * 1.5, 0) * 200}%)`,
          }}
        >
          <Shard src={logo} alt="shard" />
          <ShardText>shards</ShardText>
        </ShardsContainer>
        <Floor />
      </Content>
    </StyledField>
  );
};

export default Field;
