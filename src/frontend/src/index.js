import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  promotions:[
    {
      "id": "1",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1587659507607-home-slider_desktop.jpg",
      "title": "Camiseta",
      "link": "https://kod3rsstore.com/"
    },
    {
      "id": "2",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1585932561897-home-slider_desktop.jpg",
      "title": "Mug",
      "link": "https://kod3rsstore.com/"
    },
    {
      "id": "3",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1588608564043-home-slider_desktop_levis.jpg",
      "title": "Pin",
      "link": "https://kod3rsstore.com/"
    },
  ],
  categories:[
    {
      "id": "1",
      "imageSmall": "https://arepa.s3.amazonaws.com/camiseta.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/camiseta.png",
      "imageBig": "https://arepa.s3.amazonaws.com/camiseta.png",
      "title": "Dama",
      "link": "https://kod3rsstore.com/categories/dama"
    },
    {
      "id": "2",
      "imageSmall": "https://arepa.s3.amazonaws.com/mug.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/mug.png",
      "imageBig": "https://arepa.s3.amazonaws.com/mug.png",      
      "image": "https://arepa.s3.amazonaws.com/mug.png",
      "title": "Caballero",
      "link": "https://kod3rsstore.com/categories/caballero"
    },
    {
      "id": "3",
      "imageSmall": "https://arepa.s3.amazonaws.com/pin.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/pin.png",
      "imageBig": "https://arepa.s3.amazonaws.com/pin.png",      
      "image": "https://arepa.s3.amazonaws.com/pin.png",
      "title": "Accesorios",
      "link": "https://kod3rsstore.com/categories/accesorios"
    },
  ],
  products: [
    {
      "id": "1",
      "image": "https://arepa.s3.amazonaws.com/camiseta.png",
      "title": "Camiseta",
      "price": 25,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "3",
      "image": "https://arepa.s3.amazonaws.com/mug.png",
      "title": "Mug",
      "price": 10,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "4",
      "image": "https://arepa.s3.amazonaws.com/pin.png",
      "title": "Pin",
      "price": 4,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "5",
      "image": "https://arepa.s3.amazonaws.com/stickers1.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "6",
      "image": "https://arepa.s3.amazonaws.com/stickers2.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "7",
      "image": "https://arepa.s3.amazonaws.com/hoodie.png",
      "title": "Hoodie",
      "price": 35,
      "description": "bla bla bla bla bla"
    },

  ]
};

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhacers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);