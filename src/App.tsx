import styled from "styled-components";
import LandingPage from "./pages/landing/LandingPage";
import "./App.css";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <StyledApp>
      <LandingPage />
    </StyledApp>
  );
};

export default App;
