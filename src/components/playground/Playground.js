import { useEffect, useState } from "react";
import Chest from "../body/Chest/Chest";
import Head from "../body/Head/Head";
import LeftArm from "../body/LeftArm/LeftArm";
import LeftFoot from "../body/LeftFoot/LeftFoot";
import RightArm from "../body/RightArm/RightArm";
import RightFoot from "../body/RightFoot/RightFoot";
import Instruction from "../../assets/images/svg/instruction_box.svg";

import "./Playground.scss";

const Playground = (props) => {
  const [robotPart, setRobotPart] = useState({
    head: false,
    chest: false,
    leftArm: false,
    rightArm: false,
    leftFoot: false,
    rightFoot: false,
  });

  useEffect(() => {
    if (
      robotPart.chest &&
      robotPart.head &&
      robotPart.leftArm &&
      robotPart.rightArm &&
      robotPart.leftFoot &&
      robotPart.rightFoot
    ) {
      props.togglePart(true);
    }
  }, [props, robotPart]);

  const togglePartHandler = (part) => {
    setRobotPart((prevState) => {
      return { ...prevState, [part.id]: part.hasPart };
    });
  };

  return (
    <div className="play-background">
      <img className="instruction" src={Instruction} alt="Instruction" />
      <Chest togglePart={togglePartHandler} />
      <Head togglePart={togglePartHandler} />
      <LeftArm togglePart={togglePartHandler} />
      <RightArm togglePart={togglePartHandler} />
      <LeftFoot togglePart={togglePartHandler} />
      <RightFoot togglePart={togglePartHandler} />
    </div>
  );
};

export default Playground;
