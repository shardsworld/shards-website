import { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import shardIcon from "../../assets/logo/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addShards,
  selectShards,
  selectShowAllCards,
  showAllCards,
} from "../../state/uiSlice";
import pointer from "../../assets/ui/pointer.svg";

const SHARD_MOVE_TIME = 1000;

const StyledShardToCard = styled.div`
  position: relative;

  @media (max-width: 900px) {
    flex: 1;
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 4rem;
  transform: rotate(-45deg);

  @media (max-width: 900px) {
    bottom: 4rem;
    right: 8rem;
  }
`;

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Incicator = styled.img`
  height: 4rem;
  animation: ${upAndDown} 1s infinite;

  @media (max-width: 900px) {
    height: 3rem;
  }
`;

const Card = styled.div<{ $open: boolean }>`
  height: 24rem;
  width: 32rem;
  background: var(--bg);
  padding: 2.4rem;
  border-radius: 2rem;

  transform: scale(${({ $open }) => ($open ? 1 : 0)});
  transition: transform 0.3s linear;

  @media (max-width: 900px) {
    width: calc(100% - 1.5rem);
  }
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

const ShardButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const wriggle = keyframes`
  0% {
    transform: rotate(0);
  }
  5% {
    transform: rotate(5deg);
  }
  10% {
    transform: rotate(-5deg);
  }
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

const ShardButton = styled.button<{ $wriggle?: boolean; $mobile: boolean }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ $mobile }) => ($mobile ? "none" : "flex")};

  ${({ $wriggle }) =>
    $wriggle &&
    css`
      animation: ${wriggle} 1s infinite;
    `}

  @media (max-width: 900px) {
    display: ${({ $mobile }) => ($mobile ? "flex" : "none")};
  }
`;

const Shard = styled.img`
  height: 16rem;
  transform: translate(0, 0) scale(1);
  transition: transform ${SHARD_MOVE_TIME}ms;
  cursor: pointer;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

  @media (max-width: 900px) {
    height: 12rem;
  }
`;

interface Props {
  wriggle?: boolean;
  indicate?: boolean;
  header: string;
  body: string;
}

const ShardToCard = ({ wriggle, indicate, header, body }: Props) => {
  const dispatch = useDispatch();
  const shouldShowAllCards = useSelector(selectShowAllCards);
  const shards = useSelector(selectShards);
  const shardRef = useRef<HTMLImageElement>(null);
  const [open_, setOpen] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);

  const open = open_ || shouldShowAllCards;

  const moveShard = (mobile: boolean) => {
    if (!shardRef.current) return;
    const shardBox = shardRef.current.getBoundingClientRect();
    const startX = shardBox.x;
    const startY = shardBox.y;
    const endX = window.innerWidth - shardBox.width - 47;
    const endY = 0 - 30;

    setTransform({ x: endX - startX, y: endY - startY });

    if (mobile) {
      dispatch(showAllCards());
    }

    if (shards === null) {
      dispatch(addShards(0));
    }

    setTimeout(() => {
      setOpacity(0);
      dispatch(addShards(mobile ? 4 : 1));
    }, SHARD_MOVE_TIME);
  };

  return (
    <StyledShardToCard>
      <Card $open={open}>
        <Header>{header}</Header>
        <Body>{body}</Body>
      </Card>
      <ShardButtonContainer>
        <ShardButton
          $mobile={false}
          $wriggle={!open && wriggle}
          onClick={() => {
            setOpen(true);
            moveShard(false);
          }}
        >
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
          />
        </ShardButton>
        <ShardButton
          $mobile={true}
          $wriggle={!open && wriggle}
          onClick={() => {
            setOpen(true);
            moveShard(true);
          }}
        >
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
          />
        </ShardButton>
        {indicate && (
          <IndicatorContainer>
            <Incicator src={pointer} alt="pointer" />
          </IndicatorContainer>
        )}
      </ShardButtonContainer>
    </StyledShardToCard>
  );
};

export default ShardToCard;
