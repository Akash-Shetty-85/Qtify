import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './songs.css';
import Cursole from '../Cursole/index';

const GENRES_ENDPOINT = 'https://qtify-backend-labs.crio.do/genres';
const ALL_SONGS_ENDPOINT = 'https://qtify-backend-labs.crio.do/songs';

const SongsTab = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filterSongs, setFilterSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresResponse = await axios.get(GENRES_ENDPOINT);
        const songsResponse = await axios.get(ALL_SONGS_ENDPOINT);

        setGenres(genresResponse.data.data);

        // If selectedGenre is null or 'all', setFilterSongs to all songs
        if (selectedGenre === null || selectedGenre === 'all') {
          setFilterSongs(songsResponse.data);
        } else {
          // Otherwise, filter songs based on the selected genre
          const filteredSongs = songsResponse.data.filter(song => song.genre.key === selectedGenre);
          setFilterSongs(filteredSongs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedGenre]);

  const handleGenreClick = (key) => {
    setSelectedGenre(key);
  };

  return (
    <>
      <div className='songatab'>Songs</div>
      <nav className='songs-genera'>
        <ul>
          <li
            className={(selectedGenre === null || selectedGenre === 'all') ? 'active' : ''}
            onClick={() => handleGenreClick('all')}
          >
            All
            <div className='underline'></div>
          </li>
          {genres.map((item) => (
            <li
              key={item.key}
              className={selectedGenre === item.key ? 'active' : ''}
              onClick={() => handleGenreClick(item.key)}
            >
              {item.label}
              {selectedGenre === item.key && <div className='underline'></div>}
            </li>
          ))}
        </ul>
      </nav>

      <Cursole carddata={filterSongs} />
    </>
  );
};

export default SongsTab;
