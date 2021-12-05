const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=W4zXlbYqgvo856mglQF739zN1e9U2uo1&s=cats', {
  mode: 'cors',
})
  .then((response) => response.json())
  .then((response) => (img.src = response.data.images.original.url));
