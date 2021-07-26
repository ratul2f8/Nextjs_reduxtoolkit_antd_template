import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  selectCounter,
} from "../redux/counter/counterSlice";

export default function Home() {
  const value = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h1>{value}</h1>
        <Button
          type="primary"
          onClick={() => dispatch(increment())}
          style={{ margin: "1em" }}>
          Increase
        </Button>
        <Button type="primary" onClick={() => dispatch(decrement())}>
          Decrease
        </Button>
        <Button
          style={{ margin: "1em" }}
          type="ghost"
          className="btn btn-danger"
          onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </div>
    </React.Fragment>
  );
}
