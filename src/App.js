import React, { useState } from "react";
import Conclusion from "./components/conclusion/Conclusion";
import Introduction from "./components/introduction/Introduction";
import Playground from "./components/playground/Playground";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

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

  if (!isStart && !isEnd) {
    return (
      <React.Fragment>
        <Introduction start={startHandler} />
      </React.Fragment>
    );
  }

  if (isStart && !isEnd) {
    return (
      <React.Fragment>
        <Playground togglePart={togglePartHandler} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Conclusion end={endHandler} />
    </React.Fragment>
  );
}

export default App;
