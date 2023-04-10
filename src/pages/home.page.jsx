import React, { useState } from "react";

export function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["ready", "set", "GO"]);

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Learning React</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;