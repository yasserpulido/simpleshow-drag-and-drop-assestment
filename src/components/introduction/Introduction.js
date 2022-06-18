// import StartButton from "../shared/StartButton";
// import Start from "../../assets/images/svg/start_button.svg";
import Menu from "../../assets/images/svg/start_overlay-box-large.svg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="modal">
      <img className="menu" src={Menu} alt="Menu" />
      {/* <img className="start-button" src={Start} alt="Start Button" /> */}
    </div>
  );
};

export default Introduction;
