const img = document.querySelector('img');
const btn = document.querySelector('button');
const API_KEY = 'W4zXlbYqgvo856mglQF739zN1e9U2uo1';

const getNewGIFs = async (query) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${query}`,
    {
      mode: 'cors',
    }
  );
  const queryData = await response.json();
  img.src = queryData.data.images.original.url;
};

const searchTerm = () => {
  const query = document.querySelector('input').value || 'cats';
  return encodeURIComponent(query);
};

window.addEventListener('load', () => getNewGIFs('cats'));

btn.addEventListener('click', () => getNewGIFs(searchTerm()));
