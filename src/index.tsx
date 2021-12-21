import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";

const numbersCollection =
    new NumbersCollection([11, -3, -11, 3, 1, -1, -2, 2]);
const sorter =
    new Sorter(numbersCollection)

sorter.sort();
console.log(sorter.collection)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
