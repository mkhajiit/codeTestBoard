import React from 'react';
import BoardLayout from './components/BoardLayout.tsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

function App() {
  return (
    <Container>
      <BoardLayout />
    </Container>
  );
}

export default App;
