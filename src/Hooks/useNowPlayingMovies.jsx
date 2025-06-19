import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;