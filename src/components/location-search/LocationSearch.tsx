import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import './location-search.scss';
import { getNewLocationFromSearch, Prediction } from '../../api/locations-service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addLocation, searchLocation, serverAddLocation, setActiveLocation, updateSearchResults } from '../../store/actions';

export type LocationSearchProps = {
  handleToggleLocationSearch: (bool: boolean) => void
}

type HandleClick = (id: string) => void;

const searchResult = (suggestion: Prediction, handleClick: HandleClick) => {
  return (
    <li
      key={suggestion.id}
      onClick={() => handleClick(suggestion.id)}
      className='location-search-results-item'
    >
      {suggestion.description}
    </li>
  );
};

export const LocationSearch = ({handleToggleLocationSearch}: LocationSearchProps) => {
  const [searchInput, updateSearchInput] = useState('');
  const searchResults = useAppSelector(state => state.searchResults);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateSearchResults([]));
  }, [])

  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      if (value) {
        dispatch(searchLocation(value))
      } else {
        dispatch(updateSearchResults([]));
      }
    }, 1000),
    []
  );

  const handleResult = async (id: string) => {
    const location = await getNewLocationFromSearch(id);
    dispatch(addLocation(location));
    dispatch(setActiveLocation(id));
    dispatch(serverAddLocation(location));
    handleToggleLocationSearch(false);
  };

  const handleSearchInput = (ev: SyntheticEvent) => {
    const value = (ev.target as HTMLInputElement).value;
    updateSearchInput(value);
    debouncedSearch(value);
  };

  return (
    <div className='location-search-container'>
      <p className='location-search-title'>Search for location:</p>
      <input
        className='location-search-input'
        value={searchInput}
        onChange={handleSearchInput}
        type='text'
      />
      <div className='location-search-results'>
        <ul className='location-search-results-list'>
          {!!searchResults.length &&
            searchResults.map(result => searchResult(result, handleResult))}
        </ul>
      </div>
    </div>
  );
};
