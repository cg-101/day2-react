import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAction,
  decAction,
  decrementAction,
  incAction,
  incrementAction,
} from "./redux/actions";

export default function App() {
  // UI :: JSX
  return (
    <>
      <HelloRedux />
    </>
  );
}

function HelloRedux() {
  const state1 = useSelector((state) => state.reducer1);
  const state2 = useSelector((state) => state.reducer2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAction());
  }, []);

  return (
    <div>
      <div>Counter {state1.counter}</div>
      <button onClick={() => dispatch(incrementAction())}>
        INCREMENT
      </button>
      <button onClick={() => dispatch(decrementAction())}>
        DECREMENT
      </button>

      <div>Counter {state2.count}</div>
      <button onClick={() => dispatch(incAction())}>INCREMENT</button>
      <button onClick={() => dispatch(decAction())}>DECREMENT</button>

      <h3>List</h3>
      {state2.list.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
    </div>
  );
}
