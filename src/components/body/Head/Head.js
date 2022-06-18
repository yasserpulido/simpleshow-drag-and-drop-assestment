import { React, useState } from "react";
import Draggable from "react-draggable";
import Helmet from "../../../assets/images/svg/simplemech-head.svg";

import "./Head.css";

const Head = () => {
  const [headContainer, setHeadContainer] = useState({
    x: 485,
    y: 50,
    width: 70,
    height: 100,
  });
  const [head, setHead] = useState({
    x: 880,
    y: 320,
    width: 70,
    height: 70,
    baseX: 880,
    baseY: 320,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = head;

    setHead((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const getPosition = (element) => {
    const width = element.width;
    const height = element.height;

    return [
      [element.x, element.x + width],
      [element.y, element.y + height],
    ];
  };

  const comparePosition = (p1, p2) => {
    const r1 = p1[0] < p2[0] ? p1 : p2;
    const r2 = p1[0] < p2[0] ? p2 : p1;
    return r1[1] > r2[0] || r1[0] === r2[0];
  };

  const handlePosition = () => {
    const pos1 = getPosition(headContainer);
    const pos2 = getPosition(head);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setHead((prevState) => {
        return {
          ...prevState,
          x: headContainer.x,
          y: headContainer.y,
        };
      });
    } else {
      setHead((prevState) => {
        return {
          ...prevState,
          x: head.baseX,
          y: head.baseY,
        };
      });
    }
  };

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: head.x,
          y: head.y,
        }}
        onStop={handlePosition}
        position={{
          x: head.x,
          y: head.y,
        }}
      >
        <div className="head" style={{ width: head.width }} id="head">
          <img src={Helmet} alt="Head" style={{ width: head.width }} />
        </div>
      </Draggable>
      <div
        className="head-container"
        style={{
          width: headContainer.width,
          height: headContainer.height,
          top: headContainer.y,
          left: headContainer.x,
        }}
      ></div>
    </div>
  );
};

export default Head;
