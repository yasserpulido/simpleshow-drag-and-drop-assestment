import { React, useEffect, useState } from "react";
import Draggable from "react-draggable";
import ChestPart from "../../../assets/images/svg/simplemech-chest.svg";
import useDiposition from "../../../hooks/usePosition";
import useCoordinate from "../../../hooks/useCoordinate";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import "./Chest.scss";

const Chest = (props) => {
  const { height, width } = useWindowDimensions();
  const coordinates = useCoordinate("chest", height, width);

  const [chestContainer, setChestContainer] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [chest, setChest] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    baseX: 0,
    baseY: 0,
  });

  const togglePart = (toggle) => {
    props.togglePart({ id: "chest", hasPart: toggle });
  };

  useEffect(() => {
    setChest({
      x: coordinates.part.x,
      y: coordinates.part.y,
      width: coordinates.part.width,
      height: coordinates.part.height,
      baseX: coordinates.part.baseX,
      baseY: coordinates.part.baseY,
    });

    setChestContainer({
      x: coordinates.container.x,
      y: coordinates.container.y,
      width: coordinates.container.width,
      height: coordinates.container.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, width]);

  const onPosition = useDiposition(chestContainer, chest);

  const handleDrag = (e, ui) => {
    const { x, y } = chest;

    setChest((prevState) => {
      return { ...prevState, x: x + ui.deltaX, y: y + ui.deltaY };
    });
  };

  const handlePosition = () => {
    if (onPosition) {
      setChest((prevState) => {
        return {
          ...prevState,
          x: chestContainer.x,
          y: chestContainer.y,
        };
      });
      togglePart(true);
    } else {
      setChest((prevState) => {
        return {
          ...prevState,
          x: chest.baseX,
          y: chest.baseY,
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
          x: chest.x,
          y: chest.y,
        }}
        onStop={handlePosition}
        position={{
          x: chest.x,
          y: chest.y,
        }}
      >
        <img
          className="chest"
          src={ChestPart}
          alt="Chest"
          style={{ width: chest.width }}
        />
      </Draggable>
      <div
        className="chest-container"
        style={{
          width: chestContainer.width,
          height: chestContainer.height,
          top: chestContainer.y,
          left: chestContainer.x,
        }}
      ></div>
    </div>
  );
};

export default Chest;
