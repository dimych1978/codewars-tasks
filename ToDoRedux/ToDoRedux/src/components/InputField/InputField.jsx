import React from "react";

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <div>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Вывести список</button>
    </div>
  );
};

export default InputField;
