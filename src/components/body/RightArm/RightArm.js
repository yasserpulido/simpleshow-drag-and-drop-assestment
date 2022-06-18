import { React, useState } from "react";
import Draggable from "react-draggable";
import Arm from "../../../assets/images/svg/simplemech-arm2.svg";

import "./RightArm.css";

const RightArm = () => {
  const [rightArmContainer, setRightArmContainer] = useState({
    y: 126,
    x: 571,
    width: 70,
    height: 70,
  });
  const [rightArm, setRightArm] = useState({
    x: 1080,
    y: 140,
    width: 70,
    height: 70,
    baseX: 1080,
    baseY: 140,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = rightArm;

    setRightArm((prevState) => {
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
    const pos1 = getPosition(rightArmContainer);
    const pos2 = getPosition(rightArm);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setRightArm((prevState) => {
        return {
          ...prevState,
          x: rightArmContainer.x,
          y: rightArmContainer.y,
        };
      });
    } else {
      setRightArm((prevState) => {
        return {
          ...prevState,
          x: rightArm.baseX,
          y: rightArm.baseY,
        };
      });
    }
  };

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: rightArm.x,
          y: rightArm.y,
        }}
        onStop={handlePosition}
        position={{
          x: rightArm.x,
          y: rightArm.y,
        }}
      >
        <div
          className="right-arm"
          style={{ width: rightArm.width }}
          id="right-arm"
        >
          <img src={Arm} alt="Right Arm" style={{ width: rightArm.width }} />
        </div>
      </Draggable>
      <div
        className="right-arm-container"
        style={{
          width: rightArmContainer.width,
          height: rightArmContainer.height,
          top: rightArmContainer.y,
          left: rightArmContainer.x,
        }}
      ></div>
    </div>
  );
};

export default RightArm;
