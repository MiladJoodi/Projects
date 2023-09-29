import React from "react";
import { useState } from "react";

export default function useCounter(userInput) {
  const [value, setValue] = useState(userInput);

  const add = () => {
    setValue((prevCount) => prevCount + 1);
  };
  const minus = () => {
    setValue((prevCount) => prevCount - 1);
  };

  return [value,add,minus ]
}
