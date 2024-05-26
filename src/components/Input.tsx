import styled from "styled-components";

const StyledInput = styled.input`
  height: 4.2rem;
  padding: 0 2.4rem;
  border-radius: 2.1rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--main);
  background: var(--bg);
  border: 2px solid var(--main);
  width: 100%;
`;

interface Props {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ placeholder, value, setValue }: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
