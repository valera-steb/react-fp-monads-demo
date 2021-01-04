import React, { useCallback, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef();
  const [results, setResults] = useState("");
  const add = useCallback(() => {
    setResults((x) => ref.current.value + "\r\n" + x);
  }, []);

  return (
    <>
      <h1>Some demo</h1>

      <div>
        <input ref={ref} />
        <button onClick={add}>Add</button>
      </div>
      <div>results</div>
      <textarea value={results} readOnly />
    </>
  );
}
