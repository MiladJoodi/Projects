import React from "react";
import { useState } from "react";

 function Toggle(OriginalComponent) {
  const NewComponent = () => {
    const [isShow, setIsShow] = useState(false);

    const toggleHandler = () => {
      console.log("toggle");
      setIsShow((prevIsShow) => !prevIsShow);
    };

    return <OriginalComponent isShow={isShow} toggleHandler={toggleHandler} />;
  };
  return NewComponent;
}
export default Toggle