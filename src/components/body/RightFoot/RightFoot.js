import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Foot from "../../../assets/images/svg/simplemech-leg2.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./RightFoot.css";

const RightFoot = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("rightFoot", height, width);

  const [rightFootContainer, setRightFootContainer] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [rightFoot, setRightFoot] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    baseX: 0,
    baseY: 0,
  });

  const togglePart = (toggle) => {
    props.togglePart({ id: "rightFoot", hasPart: toggle });
  };

  useEffect(() => {
    setRightFoot({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setRightFootContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(rightFootContainer, rightFoot);

  const handleDrag = (e, ui) => {
    const { x, y } = rightFoot;

    setRightFoot((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setRightFoot((prevState) => {
        return {
          ...prevState,
          x: rightFootContainer.x,
          y: rightFootContainer.y,
        };
      });
      togglePart(true);
    } else {
      setRightFoot((prevState) => {
        return {
          ...prevState,
          x: rightFoot.baseX,
          y: rightFoot.baseY,
        };
      });
      togglePart(false);
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
        <img
          className="right-foot"
          src={Foot}
          alt="Left Foot"
          style={{ width: rightFoot.width }}
        />
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
