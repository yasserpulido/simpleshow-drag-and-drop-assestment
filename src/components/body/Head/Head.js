import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Helmet from "../../../assets/images/svg/simplemech-head.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./Head.scss";

const Head = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("head", height, width);

  const [headContainer, setHeadContainer] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [head, setHead] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    baseX: 0,
    baseY: 0,
  });

  const togglePart = (toggle) => {
    props.togglePart({ id: "head", hasPart: toggle });
  };

  useEffect(() => {
    setHead({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setHeadContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(headContainer, head);

  const handleDrag = (e, ui) => {
    const { x, y } = head;

    setHead((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setHead((prevState) => {
        return {
          ...prevState,
          x: headContainer.x,
          y: headContainer.y,
        };
      });
      togglePart(true);
    } else {
      setHead((prevState) => {
        return {
          ...prevState,
          x: head.baseX,
          y: head.baseY,
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
          x: head.x,
          y: head.y,
        }}
        onStop={handlePosition}
        position={{
          x: head.x,
          y: head.y,
        }}
      >
        <img
          className="head"
          src={Helmet}
          alt="Head"
          style={{ width: head.width }}
        />
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
