import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  isChecked: false,
  user:[{
    "id_users":"cbba56ca-60a1-4ad1-b9",
    "first_name":"Luis Antonio Rodríguez García",
    "photo": "https://pbs.twimg.com/profile_images/442983338/DSC00544_400x400.JPG",
    "email": "luisrg55@gmail.com"
  }
  ],
  promotions:[
    {
      "id": "1",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1587659507607-home-slider_desktop.jpg",
      "title": "Camiseta",
      "link": "/products"
    },
    {
      "id": "2",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1585932561897-home-slider_desktop.jpg",
      "title": "Mug",
      "link": "/products"
    },
    {
      "id": "3",
      "image": "https://http2.mlstatic.com/storage/splinter-admin/1588608564043-home-slider_desktop_levis.jpg",
      "title": "Pin",
      "link": "/products"
    },
  ],
  categories:[
    {
      "id": "1",
      "imageSmall": "https://arepa.s3.amazonaws.com/stickers1.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/stickers1.png",
      "imageBig": "https://arepa.s3.amazonaws.com/stickers1.png",
      "title": "Dama",
      "link": "/products"
    },
    {
      "id": "2",
      "imageSmall": "https://arepa.s3.amazonaws.com/mug.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/mug.png",
      "imageBig": "https://arepa.s3.amazonaws.com/mug.png",    
      "title": "Caballero",
      "link": "/products"
    },
    {
      "id": "3",
      "imageSmall": "https://arepa.s3.amazonaws.com/camiseta.png",
      "imageMedium": "https://arepa.s3.amazonaws.com/camiseta.png",
      "imageBig": "https://arepa.s3.amazonaws.com/camiseta.png",     
      "title": "Accesorios",
      "link": "/products"
    },
  ],
  products: [
    {
      "id": "1",
      "image": "https://arepa.s3.amazonaws.com/camiseta.png",
      "title": "Camiseta",
      "price": 25,
      "description": "bla bla bla bla bla",
      "qty": 1,
    },
    {
      "id": "3",
      "image": "https://arepa.s3.amazonaws.com/mug.png",
      "title": "Mug",
      "price": 10,
      "description": "bla bla bla bla bla",
      "qty": 1,
    },
    {
      "id": "4",
      "image": "https://arepa.s3.amazonaws.com/pin.png",
      "title": "Pin",
      "price": 4,
      "description": "bla bla bla bla bla",
      "qty": 1,
    },
    {
      "id": "5",
      "image": "https://arepa.s3.amazonaws.com/stickers1.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla",
      "qty": 1,
    },
    {
      "id": "6",
      "image": "https://arepa.s3.amazonaws.com/stickers2.png",
      "title": "Stickers",
      "price": 2,
      "description": "bla bla bla bla bla",
      "qty": 1,
    },
    {
      "id": "7",
      "image": "https://arepa.s3.amazonaws.com/hoodie.png",
      "title": "Hoodie",
      "price": 35,
      "description": "bla bla bla bla bla",
      "qty": 1,
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