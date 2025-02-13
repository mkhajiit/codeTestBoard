import React from 'react';
import { useParams } from 'react-router-dom';

function SearchItem() {
  const { param } = useParams();
  return (
    <div>
      <h1>상세페이지</h1>
      <h2>{param}</h2>
    </div>
  );
}

export default SearchItem;
