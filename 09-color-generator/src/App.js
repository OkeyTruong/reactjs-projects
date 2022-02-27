import React, { useState } from "react";
import SingleColor from "./SingleColor"
import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = e =>{
    e.preventDefault();
    try {
      const colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);

    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error":null}`}
          />
      <button className="btn" type="submit">
        submit
      </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
        {list && list.map((color,i)=>{
          return (
              <SingleColor 
                key ={i}
                {...color}
                index = {i}
                hexColor = {color.hex}
              />
            )
        })}
      </section>
    </>
  );
}

export default App;