import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { LocationDetails } from './components/location-details/LocationDetails';
import { LocationList } from './components/location-list/LocationList';
import { LocationSearch } from './components/location-search/LocationSearch';
import { MenuButton } from './components/menu-button/MenuButton';
import { getLocations } from './store/actions';
import { useAppDispatch } from './store/hooks';

function App() {
  const [isLocationSearch, toggleLocationSearch] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocations())
  }, [])
  
  return (
    <div className='app'>
      <Header />
      <MenuButton
        isLocationSearch={isLocationSearch}
        onButtonClick={toggleLocationSearch}
      />
      {!isLocationSearch && <LocationList />}
      {isLocationSearch && <LocationSearch handleToggleLocationSearch={toggleLocationSearch}/>}
      <LocationDetails />
    </div>
  );
}

export default App;
