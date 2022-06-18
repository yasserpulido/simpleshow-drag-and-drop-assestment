import { useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Playground from "./components/playground/Playground";

function App() {
  const [isStart, setIsStart] = useState(true);
  const startHandler = (isStart) => {
    setIsStart(isStart);
  };

  return (
    <div>
      {!isStart && <Introduction start={startHandler} />}
      {isStart && <Playground />}
    </div>
  );
}

export default App;
