import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListOfMovies from '../components/ListOfMovies/ListOfMovies';
import SearchEngine from '../components/SearchEngine/SearchEngine';
import {
  fetchAsyncTopRatedMovies,
  selectAllTopRatedMovies,
} from '../features/topRated/topRatedMoviesSlice';

const TopRatedMoviesScreen = () => {
  const topRatedMovies = useSelector(selectAllTopRatedMovies);
  const dispatch = useDispatch();
  console.log('Top Rated Movies', topRatedMovies);

  const [page, setPage] = useState(1);
  const [nameOfList, setNameOfList] = useState('Lista por defecto');

  useEffect(() => {
    dispatch(fetchAsyncTopRatedMovies(page));
  }, [dispatch, page]);

  return (
    <React.Fragment>
      <SearchEngine />
      <ListOfMovies
        movies={topRatedMovies}
        page={page}
        setPage={setPage}
        nameOfList={nameOfList}
      />
    </React.Fragment>
  );
};

export default TopRatedMoviesScreen;
