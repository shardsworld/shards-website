import styled from "styled-components";
import ShardToCard from "./ShardToCard";

const StyledCollect = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 0;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Header = styled.h2`
  font-size: 5.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--bg);
  text-align: center;
`;

const Subheader = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  max-width: 60rem;
  color: var(--bg);
  text-align: center;
  line-height: 2.4rem;
`;

const ShardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 4rem;
`;

interface Props {
  percent: number;
}

const Collect = ({ percent }: Props) => {
  return (
    <StyledCollect>
      <Content>
        <Header>Lorem ipsum dolor sit amet</Header>
        <Subheader>
          Et doloribus blanditiis ea sint laborum aut quasi impedit non odit
          sapiente ut officia eligendi At facere placeat. Et cupiditate totam 33
          eveniet provident. Et doloribus blanditiis.
        </Subheader>
        <ShardContainer>
          <ShardToCard
            index={0}
            header="Lorem ipsum dolor"
            body="Et doloribus blanditiis ea sint laborum aut quasi impedit non odit sapiente ut officia eligendi At facere placeat. Et cupiditate totam 33 eveniet provident. Et doloribus blanditiis."
          />
          <ShardToCard
            index={1}
            header="Lorem ipsum dolor"
            body="Et doloribus blanditiis ea sint laborum aut quasi impedit non odit sapiente ut officia eligendi At facere placeat. Et cupiditate totam 33 eveniet provident. Et doloribus blanditiis."
          />
          <ShardToCard
            index={2}
            header="Lorem ipsum dolor"
            body="Et doloribus blanditiis ea sint laborum aut quasi impedit non odit sapiente ut officia eligendi At facere placeat. Et cupiditate totam 33 eveniet provident. Et doloribus blanditiis."
          />
          <ShardToCard
            index={2}
            header="Lorem ipsum dolor"
            body="Et doloribus blanditiis ea sint laborum aut quasi impedit non odit sapiente ut officia eligendi At facere placeat. Et cupiditate totam 33 eveniet provident. Et doloribus blanditiis."
          />
        </ShardContainer>
      </Content>
    </StyledCollect>
  );
};

export default Collect;
