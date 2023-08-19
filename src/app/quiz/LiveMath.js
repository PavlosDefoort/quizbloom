"use client";
import "mathlive";
import { useCallback, useState, useRef, use } from "react";
import React from "react";
import "@cortex-js/compute-engine";
import { ComputeEngine } from "@cortex-js/compute-engine";

const MathLiveKeyboard = ({ mathData, setMathData }) => {
  const [value, setValue] = useState(mathData);
  const isMobile = window.innerWidth <= 640;

  const ref = useRef();
  const id = Math.random().toString(36).substring(2, 8);

  const ce = new ComputeEngine();

  const handleInput = useCallback(
    (event) => {
      const someValue = ce.parse(event.target.value).N().valueOf();
      setValue(someValue);
      setMathData(someValue); // update the mathData state
    },
    [ce, setMathData]
  );

  const handleSubmit = useCallback(() => {
    setModal(false);
    onSubmit(value);
  }, [value]);

  const Keyboard = (props) => {
    const handleSubmit = useCallback(() => {
      props.onSubmit(value);
      setModal(false);
    }, [props.onSubmit, value]);

    // ...
  };

  return (
    <div>
      <div className="">
        <math-field
          tabIndex="0"
          ref={ref}
          onInput={handleInput}
          id={id}
          style={{
            width: isMobile ? "200px" : "300px",
            color: "blue",
          }}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              handleSubmit();
            }
          }}
        ></math-field>
      </div>
    </div>
  );
};

export default React.memo(MathLiveKeyboard);
