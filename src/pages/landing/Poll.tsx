import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectShards } from "../../state/uiSlice";
import check from "../../assets/ui/check.svg";

interface OptionType {
  label: string;
  color: string;
  votes: number;
}

const StyledPoll = styled.div`
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

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
`;

const ResultText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--main);
`;

const ResultBar = styled.div<{ $color: string; $width: number }>`
  height: 1.2rem;
  border-radius: 0.6rem;
  transition: width 0.5s;

  width: ${({ $width }) => `${$width}%`};
  background: ${({ $color }) => $color};
`;

const Poll = () => {
  const shards = useSelector(selectShards) || 3;

  const initialPoll: OptionType[] = [
    {
      label: "Kings League",
      color: "#FEB630",
      votes: 36,
    },
    {
      label: "Grand Theft Auto",
      color: "#467526",
      votes: 22,
    },
    {
      label: "Rust",
      color: "#CC4029",
      votes: 15,
    },
  ];

  const [poll, setPoll] = useState<OptionType[]>(initialPoll);
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState<number>(0);

  const largestVote = poll.reduce(
    (acc, option) => (option.votes > acc ? option.votes : acc),
    0
  );

  const vote = (index: number) => {
    const updatedPoll = poll.map((option, i) => {
      if (index === i) {
        return { ...option, votes: option.votes + shards };
      }
      return option;
    });

    setVoted(true);

    setTimeout(() => {
      setPoll(updatedPoll);
    }, 500);
  };

  return (
    <StyledPoll>
      <Section $show={!voted}>
        <Header>Which game to play</Header>
        {poll.map((option, index) => (
          <Option key={option.label} onClick={() => setSelected(index)}>
            <OptionContent>
              {option.label}
              <Check $show={index === selected} src={check} alt="check" />
            </OptionContent>
          </Option>
        ))}
        <Button
          onClick={() => vote(selected)}
        >{`Vote with ${shards} Shards`}</Button>
      </Section>
      <Section $show={voted}>
        <Header>Results</Header>
        {poll.map((option) => (
          <ResultContainer key={option.label}>
            <OptionContent key={option.label}>{option.label}</OptionContent>
            <BarContainer>
              <ResultText>{option.votes}</ResultText>
              <ResultBar
                $color={option.color}
                $width={(option.votes / largestVote) * 100}
              />
            </BarContainer>
          </ResultContainer>
        ))}
        <Button onClick={() => setVoted(false)}>Change Vote</Button>
      </Section>
    </StyledPoll>
  );
};

export default Poll;
