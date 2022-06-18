import { React, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Background from "../../assets/images/svg/hanger_background.svg";
import RightFoot from "../../assets/images/svg/simplemech-leg2.svg";
import LeftFoot from "../../assets/images/svg/simplemech-leg1.svg";

import "./Playground.css";

const Playground = () => {
  // RIGHT FOOT
  const [rightFootContainer, setRightFootContainer] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [rightFoot, setRightFoot] = useState({
    x: 780,
    y: 200,
    width: 70,
    baseX: 780,
    baseY: 200,
  });
  const rightFootRef = useRef(null);

  useEffect(() => {
    setRightFootContainer((prevState) => {
      return {
        ...prevState,
        x: rightFootRef.current.offsetLeft,
        y: rightFootRef.current.offsetTop,
      };
    });
  }, []);

  const handleDrag = (e, ui) => {
    const part = ui.node.id;

    if (part === "right-foot") {
      console.log(part);
      const { x, y } = rightFoot;

      setRightFoot((prevState) => {
        return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
      });
    }
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
    <div className="background">
      <img className="hangar" src={Background} alt="Backgound" />
      <div className="playground">
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
            <img
              src={RightFoot}
              alt="Right Foot"
              style={{ width: rightFoot.width }}
            />
          </div>
        </Draggable>
        <div className="right-foot-container" ref={rightFootRef}></div>
      </div>
    </div>
  );
};

export default Playground;
