import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import RouteFinder from './RouteFinder';

const MainPage = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h2>Main Content</h2>
        <RouteFinder />
      </div>
    </div>
  );
};

export default MainPage;
