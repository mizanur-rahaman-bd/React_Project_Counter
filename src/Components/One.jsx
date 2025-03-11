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
          
        </div>
        <div className="counterpage w-[310px] h-[248px] md:w-[500px] md:h-[400px]">
        <h1 className="curve_text text-center">COUNTER</h1>
          <div className="main_counter">
            <button className="decrease" onClick={() => dispatch(decrement())}>
              -
            </button>
            <h2 className="number">{count}</h2>
            <button className="increase" onClick={() => dispatch(increment())}>
              +
            </button>
          </div>
          <div className="reset_button">
            <button onClick={() => dispatch(reset())}>RESET</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
