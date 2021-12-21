import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";

const numbersCollection =
    new NumbersCollection([11, -3, -11, 3, 1, -1, -2, 2]);
const charactersCollection =
    new CharactersCollection('ZxYnmba')
const numbersSorter =
    new Sorter(numbersCollection)
const charactersSorter =
    new Sorter(charactersCollection);

numbersSorter.sort();
charactersSorter.sort();

console.log('Numbers Sorter: ', numbersCollection.data)
console.log('Characters Sorter: ', charactersCollection.data)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
