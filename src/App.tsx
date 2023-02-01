import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchedMovies from './components/FetchedMovies';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchedMovies />} />
        <Route path=":movieId" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
