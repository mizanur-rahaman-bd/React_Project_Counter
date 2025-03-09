import React from "react";
import "./One.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Slice/counterSlice";

const One = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="heading mx-auto">
          <h1 className="mx-auto">Counter Mizanur Rahaman</h1>
        </div>
        <div className="counterpage">
          
        </div>
        <div className="main_counter">
          <button className="decrease" onClick={() => dispatch(decrement())}>
            -
          </button>
          <h2 className="number">{count}</h2>
          <button className="increase" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
      <div className="reset_button">
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </>
  );
};

export default One;
