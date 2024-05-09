import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--main);
  height: 4.2rem;
  padding: 0 2.4rem;
  border-radius: 2.1rem;
  color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 400;
`;

interface Props {
  children: React.ReactNode;
  action: () => void;
}

const Button = ({ children, action }: Props) => {
  return <StyledButton onClick={action}>{children}</StyledButton>;
};

export default Button;
