import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Conclusion.scss";

const Conclusion = (props) => {
  const { height, width } = useWindowDimensions();
  const [startButton, setStartButton] = useState({ x: 0, y: 0 });
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef) {
      setStartButton((prevState) => {
        return {
          ...prevState,
          x: width / 2 + startButtonRef.current.offsetWidth * 5.6,
          y: height / 2 - startButtonRef.current.offsetHeight * 3.3,
        };
      });
    }
  }, [height, width]);

  const clickStartHandler = () => {
    props.end(true);
  };

  return <div className="conclu-background">
     <div
        className="x-button"
        ref={startButtonRef}
        style={{ top: startButton.y, left: startButton.x }}
        onClick={clickStartHandler}
      ></div>
  </div>;
};

export default Conclusion;
