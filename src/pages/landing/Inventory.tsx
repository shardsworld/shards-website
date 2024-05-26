import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectShards } from "../../state/uiSlice";

import shardIcon from "../../assets/logo/logo.svg";

const StyledInventory = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: var(--bg);
  z-index: 2;
  height: 4.6rem;
  border-radius: 2.3rem;
  padding: 0.9rem 1.2rem;
  display: flex;
  align-items: center;
`;

const ShardContainer = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  background: var(--primary);
  border-radius: 50%;
  margin-right: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shard = styled.img`
  height: 75%;
`;

const Number = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--main);
`;

const Inventory = () => {
  const shards = useSelector(selectShards);

  if (shards === null) return null;

  return (
    <StyledInventory>
      <ShardContainer>
        <Shard src={shardIcon} alt="shard" />
      </ShardContainer>
      <Number>{`${shards} SHARDS`}</Number>
    </StyledInventory>
  );
};

export default Inventory;
