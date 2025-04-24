import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
};

export default App;
