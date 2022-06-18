import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import "./App.css";

function App() {
  const [rightFootContainer, setRightFootContainer] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    perimeter: 0,
  });
  const [rightFoot, setRightFoot] = useState({
    x: 800,
    y: 150,
    width: 100,
    height: 100,
    baseX: 800,
    baseY: 150,
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

    findPerimeter(
      rightFootRef.current.offsetHeight,
      rightFootRef.current.offsetWidth
    );
  }, []);

  const findPerimeter = (lengt, width) => {
    const result = lengt * 2 + width * 2;
    setRightFootContainer((prevState) => {
      return {
        ...prevState,
        perimeter: result,
      };
    });
  };

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
    <div className="background">
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
            style={{ width: rightFoot.width, height: rightFoot.height }}
          >
            <div>Right Foot</div>
            <div>
              x: {rightFoot.x}, y: {rightFoot.y}
            </div>
          </div>
        </Draggable>
        <div className="right-foot-container" ref={rightFootRef}>
          {" "}
          Right Foot Container x: {rightFootContainer.x}, y:{" "}
          {rightFootContainer.y}, p: {rightFootContainer.perimeter}
        </div>
      </div>
    </div>
  );
}

export default App;
