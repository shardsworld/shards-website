import styled from "styled-components";

import logo from "../assets/logo/logo.svg";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    img {
      transform: rotate(365deg);
    }

    div {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Logo = styled.img`
  height: 5rem;
  transform: rotate(1);
  transition: transform 0.3s;
`;

const LogoText = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  margin-left: 0.8rem;
  text-transform: uppercase;
  color: var(--bg);
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.3s;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <LogoText>shards</LogoText>
      </LogoContainer>
    </StyledHeader>
  );
};

export default Header;
