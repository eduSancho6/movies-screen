import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { API_KEY } from '../../api_key';

const searchMovie = async (search: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  );
  return data.json();
};
