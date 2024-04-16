"use strict";

const API_KEY = "43405752-0f76ab8866361706295625dfe";
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchImages(searchValue) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

    return fetch(`${BASE_URL}${SEARCH_PARAMS}`)
        .then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  });
}

