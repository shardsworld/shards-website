import { useRef, useState } from "react";
import styled from "styled-components";
import shardIcon from "../../assets/logo/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectShards, setShards } from "../../state/uiSlice";

const SHARD_MOVE_TIME = 1000;

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
  transition: transform 0.3s linear;
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
  height: 16rem;
  transform: translate(0, 0) scale(1);
  transition: transform ${SHARD_MOVE_TIME}ms;
`;

interface Props {
  first?: boolean;
  index: number;
  header: string;
  body: string;
}

const ShardToCard = ({ first, index, header, body }: Props) => {
  const dispatch = useDispatch();
  const shards = useSelector(selectShards);
  const shardRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);

  const moveShard = () => {
    if (!shardRef.current) return;
    const shardBox = shardRef.current.getBoundingClientRect();
    const startX = shardBox.x;
    const startY = shardBox.y;
    const endX = window.innerWidth - shardBox.width - 47;
    const endY = 0 - 30;

    setTransform({ x: endX - startX, y: endY - startY });

    if (shards === null) {
      dispatch(setShards(0));
    }

    setTimeout(() => {
      setOpacity(0);
      dispatch(setShards((shards || 0) + 1));
    }, SHARD_MOVE_TIME);
  };

  return (
    <StyledShardToCard>
      <Card $open={open}>
        <Header>{header}</Header>
        <Body>{body}</Body>
      </Card>
      <ShardContainer>
        <Shard
          ref={shardRef}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${
              open ? 0.15 : 1
            })`,
            opacity,
          }}
          src={shardIcon}
          alt="shard"
          onClick={() => {
            setOpen(true);
            moveShard();
          }}
        />
      </ShardContainer>
    </StyledShardToCard>
  );
};

export default ShardToCard;
