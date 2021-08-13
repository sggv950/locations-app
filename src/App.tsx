import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { Header } from './components/header/Header';
import { LocationList } from './components/location-list/LocationList';
import { LocationSearch } from './components/location-search/LocationSearch';
import { useAppSelector } from './hooks';

function App() {
  const locations = useAppSelector((state) => state.locationsList);

  return (
    <div className='app'>
      <Header />
      {/* <LocationList locations={locations} /> */}
      <LocationSearch />
      <div className='locations-details-section'></div>
    </div>
  );
}

export default App;
