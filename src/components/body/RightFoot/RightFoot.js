import { React, useState } from "react";
import Draggable from "react-draggable";
import Foot from "../../../assets/images/svg/simplemech-leg2.svg";

import "./RightFoot.css";

const RightFoot = () => {
  const [rightFootContainer, setRightFootContainer] = useState({
    x: 530,
    y: 270,
    width: 70,
    height: 70,
  });
  const [rightFoot, setRightFoot] = useState({
    x: 780,
    y: 200,
    width: 70,
    height: 70,
    baseX: 780,
    baseY: 200,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = rightFoot;

    setRightFoot((prevState) => {
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
    const pos1 = getPosition(rightFootContainer);
    const pos2 = getPosition(rightFoot);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setRightFoot((prevState) => {
        return {
          ...prevState,
          x: rightFootContainer.x,
          y: rightFootContainer.y,
        };
      });
    } else {
      setRightFoot((prevState) => {
        return {
          ...prevState,
          x: rightFoot.baseX,
          y: rightFoot.baseY,
        };
      });
    }
  };

  return (
    <div>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: rightFoot.x,
          y: rightFoot.y,
        }}
        onStop={handlePosition}
        position={{
          x: rightFoot.x,
          y: rightFoot.y,
        }}
      >
        <div
          className="right-foot"
          style={{ width: rightFoot.width }}
          id="right-foot"
        >
          <img src={Foot} alt="Right Foot" style={{ width: rightFoot.width }} />
        </div>
      </Draggable>
      <div
        className="right-foot-container"
        style={{
          width: rightFootContainer.width,
          height: rightFootContainer.height,
          top: rightFootContainer.y,
          left: rightFootContainer.x,
        }}
      ></div>
    </div>
  );
};

export default RightFoot;
