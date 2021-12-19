import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Sorter {
    constructor(public collection: number[]) {}
    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++){
            for (let j = 0; j < length - i - 1; j++){
                if (this.collection[j] > this.collection[j+1]){
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = leftHand;
                }
            }
        }
    }
}

const sorter = new Sorter([11, -3, -11, 3, 1, -1, -2, 2])
sorter.sort();
console.log(sorter.collection)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
