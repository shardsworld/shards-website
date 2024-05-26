import { useState } from "react";
import styled from "styled-components";
import shardIcon from "../../assets/logo/logo.svg";

const StyledShardToCard = styled.div`
  position: relative;
`;

const Card = styled.div<{ $open: boolean }>`
  height: 24rem;
  width: 32rem;
  background: var(--bg);
  padding: 2.4rem;
  border-radius: 2rem;

  transform: scale(${({ $open }) => ($open ? 1 : 0)});
  transition: transform 0.5s;
`;

const Header = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--main);
  margin-bottom: 0.8rem;
`;

const Body = styled.div`
  font-size: 1.4rem;
  color: var(--sub);
  font-weight: 400;
  font-family: "Inter", sans-serif;
  line-height: 2.2rem;
`;

const ShardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shard = styled.img`
  height: 20rem;
  transform: translate(0, 0) scale(1);
  transition: transform 2s;
`;

interface Props {
  first?: boolean;
  index: number;
  header: string;
  body: string;
}

const ShardToCard = ({ first, index, header, body }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledShardToCard>
      <Card $open={open}>
        <Header>{header}</Header>
        <Body>{body}</Body>
      </Card>
      <ShardContainer>
        <Shard src={shardIcon} alt="shard" onClick={() => setOpen(true)} />
      </ShardContainer>
    </StyledShardToCard>
  );
};

export default ShardToCard;
