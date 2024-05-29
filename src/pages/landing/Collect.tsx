import styled from "styled-components";
import ShardToCard from "./ShardToCard";

const StyledCollect = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 2rem;
    gap: 1.5rem;
  }
`;

const Header = styled.h2`
  font-size: 5.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--bg);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 3.3rem;
  }
`;

const Subheader = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  max-width: 60rem;
  color: var(--bg);
  text-align: center;
  line-height: 2.4rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
    max-width: 100%;
    line-height: 2rem;
  }
`;

const ShardContainerContainer = styled.div`
  @media (max-width: 900px) {
    width: 100%;
    overflow: auto;
  }
`;

const ShardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 4rem;

  @media (max-width: 900px) {
    width: calc(400% - 1.5rem * 3);
    gap: 0;
    overflow: auto;
  }
`;

interface Props {
  percent: number;
}

const Collect = ({ percent }: Props) => {
  return (
    <StyledCollect>
      <Content>
        <Header>transform fans into active stakeholders</Header>
        <Subheader>
          Shards redefine community engagement by transforming members into
          active stakeholders. These tradable Shards offer voting power,
          exclusive access, and a unique share in the creator's growth.
        </Subheader>
        <ShardContainerContainer>
          <ShardContainer>
            <ShardToCard
              wriggle
              indicate={percent > 0.8}
              header="Incentivize"
              body="Content creators can distribute Shards to incentivize their community to engage with their content. This can be done through rewarding active viewers, contributors, or even as a prize for competitions."
            />
            <ShardToCard
              header="Purchase"
              body="Community members can invest in their favorite content creators by purchasing their Shards. This investment can be seen as a way to support the creator's growth and have a share in their success."
            />
            <ShardToCard
              header="Engage"
              body="Shards can be used to vote on important decisions within the community, access exclusive content, trigger actions in streams and much more! The more Shards you have, the more influence you have."
            />
            <ShardToCard
              header="Trade"
              body="Shards can be traded on the Shard platform, allowing users to buy, sell, and trade Shards with other community members. This creates a new economy within the community and allows users to benefit from their investment."
            />
          </ShardContainer>
        </ShardContainerContainer>
      </Content>
    </StyledCollect>
  );
};

export default Collect;
