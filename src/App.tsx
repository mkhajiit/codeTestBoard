import React from 'react';
import styled from 'styled-components';
import Router from './router/Router.tsx';

const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
