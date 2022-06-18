import { React, useState } from "react";
import Draggable from "react-draggable";
import Arm from "../../../assets/images/svg/simplemech-arm1.svg";

import "./LeftArm.css";

const LeftArm = () => {
  const [leftArmContainer, setLeftArmContainer] = useState({
    x: 390,
    y: 125,
    width: 70,
    height: 70,
  });
  const [leftArm, setLeftArm] = useState({
    x: 980,
    y: 140,
    width: 70,
    height: 70,
    baseX: 980,
    baseY: 140,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = leftArm;

    setLeftArm((prevState) => {
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
    const pos1 = getPosition(leftArmContainer);
    const pos2 = getPosition(leftArm);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setLeftArm((prevState) => {
        return {
          ...prevState,
          x: leftArmContainer.x,
          y: leftArmContainer.y,
        };
      });
    } else {
      setLeftArm((prevState) => {
        return {
          ...prevState,
          x: leftArm.baseX,
          y: leftArm.baseY,
        };
      });
    }
  };

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: leftArm.x,
          y: leftArm.y,
        }}
        onStop={handlePosition}
        position={{
          x: leftArm.x,
          y: leftArm.y,
        }}
      >
        <div
          className="left-arm"
          style={{ width: leftArm.width }}
          id="left-arm"
        >
          <img src={Arm} alt="Left Arm" style={{ width: leftArm.width }} />
        </div>
      </Draggable>
      <div
        className="left-arm-container"
        style={{
          width: leftArmContainer.width,
          height: leftArmContainer.height,
          top: leftArmContainer.y,
          left: leftArmContainer.x,
        }}
      ></div>
    </div>
  );
};

export default LeftArm;
