import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardLayout from '../components/BoardLayout.tsx';
import SearchItem from '../components/contents/SearchItem.tsx';

function router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BoardLayout />} />
          <Route path='/contents/:param' element={<SearchItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default router;
