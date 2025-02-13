import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardLayout from '../components/BoardLayout.tsx';
import SearchItem from '../components/contents/SearchItem.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoardLayout />} />
        <Route path='/contents/:param' element={<SearchItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
