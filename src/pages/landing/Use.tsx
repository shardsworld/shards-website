import styled from "styled-components";
import { useState } from "react";
import Poll from "./Poll";
import Buy from "./Buy";
import Engage from "./Engage";
import Sell from "./Sell";

enum UseType {
  VOTE = "vote",
  PURCHASE = "purchase",
  ENGAGE = "engage",
  TRADE = "trade",
}

const USES = [UseType.VOTE, UseType.PURCHASE, UseType.ENGAGE, UseType.TRADE];

const DESCRIPTIONS = {
  [UseType.VOTE]:
    "Shard holders can vote on decisions within the community, the more Shards you have, the more influence you have.",
  [UseType.PURCHASE]:
    "Shard holders can purchase Shards from their favorite content creators to support their growth.",
  [UseType.ENGAGE]:
    "Shard holders can engage with the community by using their Shards to access exclusive content and trigger actions.",
  [UseType.TRADE]:
    "Shard holders can trade their Shards with other community members on the Shard platform.",
};

const COMPONENTS: Record<string, JSX.Element> = {
  [UseType.VOTE]: <Poll />,
  [UseType.PURCHASE]: <Buy />,
  [UseType.ENGAGE]: <Engage />,
  [UseType.TRADE]: <Sell />,
};

const StyledUse = styled.div`
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
`;

const Header = styled.h2`
  font-size: 5.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--bg);
  text-align: center;
`;

const Subheader = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  max-width: 60rem;
  color: var(--bg);
  text-align: center;
  line-height: 2.4rem;
`;

const UseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 4rem;
`;

const Options = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 4rem;
`;

const Option = styled.button<{ $active: boolean }>`
  height: 4.2rem;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.4rem;
  border: 2px solid var(--bg);
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  background: ${({ $active }) => ($active ? "var(--bg)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--main)" : "var(--bg)")};
`;

interface Props {
  percent: number;
}

const Use = ({ percent }: Props) => {
  const [active, setActive] = useState(USES[0]);

  return (
    <StyledUse>
      <Content>
        <Header>use shards</Header>
        <Subheader>{DESCRIPTIONS[active]}</Subheader>
        <UseContainer>{COMPONENTS[active]}</UseContainer>
        <Options>
          {USES.map((use) => (
            <Option
              key={use}
              $active={active === use}
              onClick={() => setActive(use)}
            >
              {use}
            </Option>
          ))}
        </Options>
      </Content>
    </StyledUse>
  );
};

export default Use;
