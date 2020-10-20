import React from 'react';
import './App.css';

const taxes = {
  UT: 6.85,
  NV: 8,
  TX: 6.25,
  AL: 4,
  CA: 8.25
}

const discounts = {
  1000: 3,
  5000: 5,
  7000: 7,
  10000: 10,
  50000: 15
}

function App() {

  function calculate() {
    const totalItems = document.getElementById('totalItems').value;
    const price = document.getElementById('price').value;

    const output = document.getElementById('output');

    output.textContent = applyTax(applyDiscount(totalItems * price));
  }

  function applyDiscount(totalPrice) {
    let discount;
    const numbers = Object.keys(discounts)
    for(let i = 0; i < numbers.length; ++i) {
      if(totalPrice >= numbers[i]) {
        discount = discounts[numbers[i]];
      }
    }

    if(!discount) {
      return totalPrice
    }
    return totalPrice * (1 - discount/100)
  }

  function applyTax(totalPrice) {
    const tax = taxes[document.getElementById('tax').value];
    return totalPrice * (1 + tax/100)
  }

  return (
    <div className="App">
      <input id="totalItems" type="number"></input>
      <input id="price" type="number"></input>
      <input id="tax" placeholder="State(XX)" type="text"></input>
      <button onClick={calculate}>CALCULATE</button>
      <p id="output"></p>
    </div>
  );



}

export default App;
