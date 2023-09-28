import React from "react";
import { useEffect, useState } from "react";

export default function useUpdateLogger(title) {
  const [value, setValue] = useState(title);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return [value, setValue];
}
