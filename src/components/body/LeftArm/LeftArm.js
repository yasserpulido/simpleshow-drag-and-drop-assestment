import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Arm from "../../../assets/images/svg/simplemech-arm_1.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./LeftArm.scss";

const LeftArm = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("leftArm", height, width);

  const [leftArmContainer, setLeftArmContainer] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [leftArm, setLeftArm] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    baseX: 0,
    baseY: 0,
  });

  const togglePart = (toggle) => {
    props.togglePart({ id: "leftArm", hasPart: toggle });
  };

  useEffect(() => {
    setLeftArm({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setLeftArmContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(leftArmContainer, leftArm);

  const handleDrag = (e, ui) => {
    const { x, y } = leftArm;

    setLeftArm((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setLeftArm((prevState) => {
        return {
          ...prevState,
          x: leftArmContainer.x,
          y: leftArmContainer.y,
        };
      });
      togglePart(true);
    } else {
      setLeftArm((prevState) => {
        return {
          ...prevState,
          x: leftArm.baseX,
          y: leftArm.baseY,
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
          x: leftArm.x,
          y: leftArm.y,
        }}
        onStop={handlePosition}
        position={{
          x: leftArm.x,
          y: leftArm.y,
        }}
      >
        <img
          className="left-arm"
          src={Arm}
          alt="Left Arm"
          style={{ width: leftArm.width }}
        />
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
