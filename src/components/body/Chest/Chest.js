import { React, useState } from "react";
import Draggable from "react-draggable";
import ChestPart from "../../../assets/images/svg/simplemech-chest.svg";

import "./Chest.css";

const Chest = () => {
  const [chestContainer, setChestContainer] = useState({
    x: 442,
    y: 125,
    width: 150,
    height: 150,
  });
  const [chest, setChest] = useState({
    x: 838,
    y: 180,
    width: 150,
    height: 150,
    baseX: 838,
    baseY: 180,
  });

  const handleDrag = (e, ui) => {
    const { x, y } = chest;

    setChest((prevState) => {
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
    const pos1 = getPosition(chestContainer);
    const pos2 = getPosition(chest);
    const result =
      comparePosition(pos1[0], pos2[0]) && comparePosition(pos1[1], pos2[1]);

    if (result) {
      setChest((prevState) => {
        return {
          ...prevState,
          x: chestContainer.x,
          y: chestContainer.y,
        };
      });
    } else {
      setChest((prevState) => {
        return {
          ...prevState,
          x: chest.baseX,
          y: chest.baseY,
        };
      });
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
        <div className="chest" style={{ width: chest.width }} id="chest">
          <img src={ChestPart} alt="Chest" style={{ width: chest.width }} />
        </div>
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
