import Background from "../../assets/images/svg/hanger_background.svg";
import Chest from "../body/Chest/Chest";
import Head from "../body/Head/Head";
import LeftArm from "../body/LeftArm/LeftArm";
import LeftFoot from "../body/LeftFoot/LeftFoot";
import RightArm from "../body/RightArm/RightArm";
import RightFoot from "../body/RightFoot/RightFoot";

import "./Playground.css";

const Playground = () => {
  return (
    <div className="background">
      <img className="hangar" src={Background} alt="Backgound" />
      <div className="playground">
        <RightFoot />
        <LeftFoot />
        <Head />
        <RightArm />
        <LeftArm />
        <Chest />
      </div>
    </div>
  );
};

export default Playground;
