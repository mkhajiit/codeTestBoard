// 컨탠츠 폴더에 있는 컴포넌트를 임포트해서 사용하세요
import React from 'react';
import styled from 'styled-components';
import Search from './contents/Search.tsx';

// 스타일드 컴포넌트
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
      <Search />
    </Layout>
  );
}

export default BoardLayout;
