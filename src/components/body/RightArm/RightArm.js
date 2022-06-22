import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Arm from "../../../assets/images/svg/simplemech-arm_2.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./RightArm.css";

const RightArm = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("rightArm", height, width);

  const [rightArmContainer, setRightArmContainer] = useState({
    y: 0,
    x: 0,
    width: 0,
    height: 0,
  });
  const [rightArm, setRightArm] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    baseX: 0,
    baseY: 0,
  });

  const togglePart = (toggle) => {
    props.togglePart({ id: "rightArm", hasPart: toggle });
  };

  useEffect(() => {
    setRightArm({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setRightArmContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(rightArmContainer, rightArm);

  const handleDrag = (e, ui) => {
    const { x, y } = rightArm;

    setRightArm((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setRightArm((prevState) => {
        return {
          ...prevState,
          x: rightArmContainer.x,
          y: rightArmContainer.y,
        };
      });
      togglePart(true);
    } else {
      setRightArm((prevState) => {
        return {
          ...prevState,
          x: rightArm.baseX,
          y: rightArm.baseY,
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
          x: rightArm.x,
          y: rightArm.y,
        }}
        onStop={handlePosition}
        position={{
          x: rightArm.x,
          y: rightArm.y,
        }}
      >
        <img
          className="right-arm"
          src={Arm}
          alt="Right Arm"
          style={{ width: rightArm.width }}
        />
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
