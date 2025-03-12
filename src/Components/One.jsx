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
        <div className="heading mx-auto"></div>
        <div className="counterpage w-[310px] h-[248px] md:w-[500px] md:h-[400px] pt-[25px] md:pt-[50px] pb-[50px] px-[50px] mt-[50px]">
          <h1 className="curve_text mb-[20px] w-[170px] md:w-[250px] h-[45px] md:h-[60px] px-[10px] py-[9px] md:py-[17px] text-center">COUNTER</h1>
          <div className="main_counter sm:pt-[10px] md:pt-[55px] mb-[50px]">
            <button className="decrease w-[60px] h-[60px] mr-[55px] pb-[5px]" onClick={() => dispatch(decrement())}>
              -
            </button>
            <h2 className="number w-[60px] h-[60px]">{count}</h2>
            <button className="increase w-[60px] h-[60px] ml-[40px]" onClick={() => dispatch(increment())}>
              +
            </button>
          </div>
          <div className="reset_button">
            <button className="w-[170px] md:w-[250px] h-[45px] md:h-[60px] px-[50px] md:px-[90px] py-[10px] md:py-[18px] mt-[20px] md:mt-[50px]" onClick={() => dispatch(reset())}>RESET</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
