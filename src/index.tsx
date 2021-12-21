import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import LinkedList from "./LinkedList";

const numbersCollection =
    new NumbersCollection([11, -3, -11, 3, 1, -1, -2, 2]);
numbersCollection.sort();
console.log('Numbers Sorter: ', numbersCollection.data)

const charactersCollection =
    new CharactersCollection('ZxYnmba')
charactersCollection.sort();
console.log('Characters Sorter: ', charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7)
linkedList.sort();
linkedList.print();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
