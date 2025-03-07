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
        <div className="main_counter">
          <button onClick={() => dispatch(increment())}>+</button>
          <h2>{count}</h2>
          <button onClick={() => dispatch(decrement())}>-</button>
          <div className="reset_button">
            <button onClick={() => dispatch(reset())}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
