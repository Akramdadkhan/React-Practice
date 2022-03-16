import React, { useState } from "react";

const ArrayInUseState = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleInputValue = (e) => {
    setText(e.target.value);
  };
  const handleData = () => {
    setData([...data, text]);
  };

  return (
    <div>
      <h1>This ArrayInUseState Components </h1>

      <input type="text" onChange={handleInputValue} />
      <button onClick={handleData}>Add</button>
      <ol>
        {data.map((element) => {
          return (
            <div>
              <li>{element}</li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

//data.map(()=>{

// })

export default ArrayInUseState;
