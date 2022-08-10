import React, { useState } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux'
function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
      jax: 'sibl',
    }
  }
  const newState = { ...currentState }
  if (action.type === 'plus') {
    newState.number++;
  }
  if (action.type === 'minus') {
    newState.number--;
  }
  return newState;
}
const store = createStore(reducer);
export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id='container'>
      <h1>Root</h1>
      <div id='grid'>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}

function Left2(props) {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  )
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}

function Right3(props) {
  const dis = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => { dis({ type: "plus" }) }} />
      <input type="button" value="-" onClick={() => { dis({ type: "minus" }) }} />
    </div>
  )
}
