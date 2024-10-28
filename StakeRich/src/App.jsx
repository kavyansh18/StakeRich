// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Loading from './Pages/Loading/Loading';
import Trade from './Pages/Swap/Trade';
import Buy from './Pages/Buy/Buy';
import Logo from './components/Logo';
import Blog from './Pages/Blog/Blog';
import Test from './Pages/Test';
import Gambling from './Pages/Gambling/Gambling'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/test" element={<Test />} />
        <Route path="/gambling" element={<Gambling/>} />
      </Routes>
      <Logo />
     
    </Router>
  );
};

export default App;
