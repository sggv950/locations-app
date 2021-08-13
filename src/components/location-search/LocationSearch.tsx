import React, { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import './location-search.scss';
import { searchLocation } from '../../api/locations-service';

const searchResult = (location: any) => {
  return <li className='location-search-results-item'>{location.title}</li>;
};

export const LocationSearch = () => {
  const [searchInput, updateSearchInput] = useState('');
  const [searchResults, updateSearchResults] = useState([]);

  const debouncedConsole = useCallback(
    debounce(async (value) => {
      if (value) {
        const results = await searchLocation();
        console.log('http res: ', results);
        updateSearchResults(results);
      } else {
        updateSearchResults([]);
      }
    }, 1000),
    []
  );

  const handleSearchInput = (ev: any) => {
    const value = ev.target.value;
    updateSearchInput(value);
    console.log(value);
    debouncedConsole(value);
  };

  return (
    <div className='location-search-container'>
      <h4 className='location-search-title'>Search for location:</h4>
      <input
        className='location-search-input'
        value={searchInput}
        onChange={handleSearchInput}
        type='text'
      />
      <div className='location-search-results'>
        <ul className='location-search-results-list'>
          {!!searchResults.length && searchResults.map(searchResult)}
        </ul>
      </div>
    </div>
  );
};
