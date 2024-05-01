import React from "react";

const Example = ({ example }) => {
  console.log(example);
  return (
    <div
      style={{ color: "blue", background: "#82dd82", width: "max-content " }}
    >
      {example}
    </div>
  );
};

export default Example;
