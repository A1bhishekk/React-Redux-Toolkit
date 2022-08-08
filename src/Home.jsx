import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { count } = useSelector((state) => state.custom);
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({ type: "increment" });
  };
  const addBtn25 = () => {
    dispatch({ type: "incrementByValue", payload: 25 });
  };
  const subBtn = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className="container">
      <h1>React Redux ToolKit Tutorial</h1>
      <h2>What is Redux Toolkit?</h2>
      <p>
        Redux Toolkit is our official, opinionated, batteries-included toolset
        for efficient Redux <br />
        development. It is intended to be the standard way to write Redux logic,
        and we strongly recommend that you use it.
      </p>
      <h3>Counter II : {count}</h3>
      <button onClick={addBtn}>Increment</button>
      <button onClick={addBtn25}>Increment by 25</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Home;
