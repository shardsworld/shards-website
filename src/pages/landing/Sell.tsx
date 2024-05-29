import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addShards } from "../../state/uiSlice";
import Input from "../../components/Input";
import logo from "../../assets/logo/logo.svg";

const StyledSell = styled.div`
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

const Button = styled.button<{ $disabled?: boolean }>`
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

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
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

const AmountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
`;

const ValueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Value = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--main);
  font-family: "Inter", sans-serif;
`;

const Sell = () => {
  const dispatch = useDispatch();
  const price = 0.23;

  const [purchased, setPurchased] = useState(false);
  const [amount, setAmount] = useState("");

  return (
    <StyledSell>
      <Section $show={!purchased}>
        <Header>Trade Shards</Header>
        <Input
          placeholder="Shards amount"
          value={amount}
          setValue={setAmount}
        />
        <AmountsContainer>
          <ValueContainer>
            <Value>Shard price:</Value>
            <Value>{`$${price}`}</Value>
          </ValueContainer>
          <ValueContainer>
            <Value>ROI:</Value>
            <Value>{`${amount ? 34 : 0}%`}</Value>
          </ValueContainer>
          <ValueContainer>
            <Value>Profit:</Value>
            <Value>{`$${(Number(amount) * 0.34).toLocaleString()}`}</Value>
          </ValueContainer>
        </AmountsContainer>

        <Button
          $disabled={!amount}
          onClick={() => {
            if (!amount) return;
            dispatch(addShards(Number(amount)));
            setPurchased(true);
            setAmount("");
          }}
        >
          {!amount
            ? "Enter amount"
            : `Sell ${Number(amount).toLocaleString()} Shards`}
        </Button>
      </Section>
      <Section $show={purchased}>
        <Header>{`${amount} Shards Purchased!!`}</Header>
        <ShardContainer>
          <Shard src={logo} alt="shard" />
        </ShardContainer>
        <Button onClick={() => setPurchased(false)}>Buy more</Button>
      </Section>
    </StyledSell>
  );
};

export default Sell;
