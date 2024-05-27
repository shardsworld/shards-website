import { useState } from "react";
import styled from "styled-components";
import { SECTIONS } from "../../app/constants/animation";

const Background = styled.div`
  display: none;
  position: fixed;
  bottom: 6rem;
  left: 50%;
  width: 16.5rem;
  transform: translateX(-50%);
  height: 4.8rem;
  border-radius: 2.4rem;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    display: flex;
  }
`;

const StyledButton = styled.button`
  display: none;
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  height: 4.8rem;
  width: 16.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 2.4rem;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  z-index: 2;

  background: var(--bg);
  color: black;
  mix-blend-mode: lighten;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MobileButton = () => {
  const [index, setIndex] = useState(0);
  const SCROLL_JUMPS = [1];

  return (
    <>
      <Background />
      <StyledButton
        onClick={() => {
          const height = window.innerHeight * SECTIONS;
          window.scrollTo({
            top: height * SCROLL_JUMPS[index],
            behavior: "smooth",
          });
          setIndex((index + 1) % SCROLL_JUMPS.length);
        }}
      >
        Explore
      </StyledButton>
      ;
    </>
  );
};

export default MobileButton;
