import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Foot from "../../../assets/images/svg/simplemech-leg1.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./LeftFoot.scss";

const LeftFoot = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("leftFoot", height, width);

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

  const togglePart = (toggle) => {
    props.togglePart({ id: "leftFoot", hasPart: toggle });
  };

  useEffect(() => {
    setLeftFoot({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setLeftFootContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(leftFootContainer, leftFoot);

  const handleDrag = (e, ui) => {
    const { x, y } = leftFoot;

    setLeftFoot((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setLeftFoot((prevState) => {
        return {
          ...prevState,
          x: leftFootContainer.x,
          y: leftFootContainer.y,
        };
      });
      togglePart(true);
    } else {
      setLeftFoot((prevState) => {
        return {
          ...prevState,
          x: leftFoot.baseX,
          y: leftFoot.baseY,
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
          x: leftFoot.x,
          y: leftFoot.y,
        }}
        onStop={handlePosition}
        position={{
          x: leftFoot.x,
          y: leftFoot.y,
        }}
      >
        <img
          className="left-foot"
          src={Foot}
          alt="Left Foot"
          style={{ width: leftFoot.width }}
        />
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
