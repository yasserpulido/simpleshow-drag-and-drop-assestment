import React, { useState } from "react";
import "./App.css";
import Conclusion from "./components/conclusion/Conclusion";
import Introduction from "./components/introduction/Introduction";
import Playground from "./components/playground/Playground";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(true);

  const startHandler = (isStart) => {
    setIsStart(isStart);
  };

  const togglePartHandler = (togglePart) => {
    if (togglePart) {
      setIsStart(false);
      setIsEnd(true);
    }
  };

  const endHandler = () => {
    setIsStart(true);
    setIsEnd(false);
  };

  return (
    <React.Fragment>
      {!isStart && !isEnd && <Introduction start={startHandler} />}
      {isStart && !isEnd && <Playground togglePart={togglePartHandler} />}
      {!isStart && isEnd && <Conclusion end={endHandler} />}
    </React.Fragment>
  );
}

export default App;
