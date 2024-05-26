import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeShards, selectShards } from "../../state/uiSlice";
import check from "../../assets/ui/check.svg";
import logo from "../../assets/logo/logo.svg";

interface OptionType {
  label: string;
  pastTense: string;
  price: number;
}

const StyledEngage = styled.div`
  height: 27rem;
  width: 32rem;
  background: var(--bg);
  padding: 2.4rem;
  border-radius: 2rem;
`;

const Section = styled.div<{ $show: boolean }>`
  display: flex;
  flex-direction: column;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  gap: 0.4rem;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--main);
  margin-bottom: 0.4rem;
  width: 100%;
  text-align: center;
`;

const Option = styled.button`
  height: 4.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;
  border-radius: 2.4rem;
  cursor: pointer;

  border: solid 2px var(--main);
`;

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--main);
`;

const Check = styled.img<{ $show: boolean }>`
  height: 1.6rem;

  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;

const Button = styled.button`
  height: 4.2rem;
  width: 100%;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  background: var(--primary);
  color: var(--bg);
`;

const ShardContainer = styled.div`
  background: var(--primary);
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shard = styled.img`
  height: 75%;
`;

const Text = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--main);
  text-align: center;
  width: 70%;
`;

const Engage = () => {
  const dispatch = useDispatch();
  const shards = useSelector(selectShards);

  const OPTIONS: OptionType[] = [
    {
      label: "Jump Scare",
      pastTense: "Jump Scared",
      price: 2,
    },
    {
      label: "Join game",
      pastTense: "Joined game",
      price: 4,
    },
    {
      label: "Play song",
      pastTense: "Played song",
      price: 3,
    },
  ];

  const [selected, setSelected] = useState<number>(0);
  const [paid, setPaid] = useState<boolean>(false);

  const price = OPTIONS[selected].price;

  return (
    <StyledEngage>
      <Section $show={!paid}>
        <Header>Select an option</Header>
        {OPTIONS.map((option, index) => (
          <Option key={option.label} onClick={() => setSelected(index)}>
            <OptionContent>
              {option.label}
              <Check $show={index === selected} src={check} alt="check" />
            </OptionContent>
          </Option>
        ))}
        <Button
          onClick={() => {
            dispatch(removeShards(price));
            setPaid(true);
          }}
        >{`${OPTIONS[selected].label} for ${price} Shards`}</Button>
      </Section>
      <Section $show={paid}>
        <Header>{`${OPTIONS[selected].pastTense}!`}</Header>
        <ShardContainer>
          <Shard src={logo} alt="shard" />
        </ShardContainer>
        <Text>{`Used ${price} Shards. You have ${shards} Shards left`}</Text>
        <Button onClick={() => setPaid(false)}>View options</Button>
      </Section>
    </StyledEngage>
  );
};

export default Engage;
