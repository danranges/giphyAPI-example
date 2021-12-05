const img = document.querySelector('img');
const btn = document.querySelector('button');

const getNewGIFs = (query) =>
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=W4zXlbYqgvo856mglQF739zN1e9U2uo1&s=${query}`,
    {
      mode: 'cors',
    }
  )
    .then((response) => response.json())
    .then((response) => (img.src = response.data.images.original.url));

const searchTerm = () => {
  const query = document.querySelector('input').value || 'cats';
  return encodeURIComponent(query);
};

window.addEventListener('load', () => getNewGIFs('cats'));

btn.addEventListener('click', () => getNewGIFs(searchTerm()));
