import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Menu from "../../assets/images/svg/start_overlay-box-large.svg";
import "./Introduction.css";

const Introduction = (props) => {
  const { height, width } = useWindowDimensions();
  const [startButton, setStartButton] = useState({ x: 0, y: 0 });
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef) {
      setStartButton((prevState) => {
        return {
          ...prevState,
          x: width / 2 - startButtonRef.current.offsetWidth / 2,
          y: height / 2 + startButtonRef.current.offsetHeight * 2,
        };
      });
    }
  }, [height, width]);

  const clickStartHandler = () => {
    props.start(true);
  };

  return (
    <div className="modal">
      <img className="menu" src={Menu} alt="Menu" />
      <div
        className="start-button"
        ref={startButtonRef}
        style={{ top: startButton.y, left: startButton.x }}
        onClick={clickStartHandler}
      ></div>
    </div>
  );
};

export default Introduction;
