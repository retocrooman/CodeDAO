import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Analytics} from './components/Analytics';

function App() {
  return (
    <><Header/>
    <BrowserRouter>
      <Routes>
        <Route path="CodeDAO/" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
