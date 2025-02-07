import React from 'react';
import styled from 'styled-components';
import BasicOperation from './contents/BasicOperation.tsx';

const Layout = styled.div`
  width: 80%;
  height: 60%;
  min-width: 500px;
  min-height: 400px;
  border: 5px solid #b33939;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function BoardLayout() {
  return (
    <Layout>
      <BasicOperation />
    </Layout>
  );
}

export default BoardLayout;
