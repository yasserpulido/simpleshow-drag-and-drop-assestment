import { React, useState } from "react";
import Draggable from "react-draggable";
import Foot from "../../../assets/images/svg/simplemech-leg1.svg";

import "./LeftFoot.css";

const LeftFoot = () => {
  const [leftFootContainer, setLeftFootContainer] = useState({
    x: 435,
    y: 270,
    width: 70,
    height: 70,
  });
  const [leftFoot, setLeftFoot] = useState({
    x: 700,
    y: 200,
    width: 70,
    height: 70,
    baseX: 700,
    baseY: 200,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = leftFoot;

    setLeftFoot((prevState) => {
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
    const pos1 = getPosition(leftFootContainer);
    const pos2 = getPosition(leftFoot);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setLeftFoot((prevState) => {
        return {
          ...prevState,
          x: leftFootContainer.x,
          y: leftFootContainer.y,
        };
      });
    } else {
      setLeftFoot((prevState) => {
        return {
          ...prevState,
          x: leftFoot.baseX,
          y: leftFoot.baseY,
        };
      });
    }
  };

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: leftFoot.x,
          y: leftFoot.y,
        }}
        onStop={handlePosition}
        position={{
          x: leftFoot.x,
          y: leftFoot.y,
        }}
      >
        <div
          className="left-foot"
          style={{ width: leftFoot.width }}
          id="left-foot"
        >
          <img src={Foot} alt="Left Foot" style={{ width: leftFoot.width }} />
        </div>
      </Draggable>
      <div
        className="left-foot-container"
        style={{
          width: leftFootContainer.width,
          height: leftFootContainer.height,
          top: leftFootContainer.y,
          left: leftFootContainer.x,
        }}
      ></div>
    </div>
  );
};

export default LeftFoot;
