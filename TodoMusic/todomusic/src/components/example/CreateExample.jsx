import React from "react";
import { useState } from "react";
import { useCreateExampleMutation } from "../../store/api/example.api";

const defaultValue = { name: "" };

const CreateExample = () => {
  const [example, setExample] = useState(defaultValue);
console.log(example)
  const [createExample] = useCreateExampleMutation();
  const handleSubmit = e => {
    e.preventDefault();
    createExample(example).then(() => setExample(defaultValue));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={example.name}
            onChange={e => setExample({ ...example, name: e.target.value })}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateExample;
