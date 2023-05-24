import {React, useState} from 'react'
import {Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Page1} from './pages';

const App = () => (
<div>
  <Routes>
    <Route path="/" element={<Page1 />} />
  </Routes>
</div>
);

export default App;