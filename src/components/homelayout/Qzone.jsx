import React from "react";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
import swimingImg from "../../assets/swimming.png";
import bgImg from "../../assets/bg.png";
const Qzone = () => {
  return (
    <div>
      <div className="bg-base-200 p-4">
        <h1 className="font-bold mb-5 text-2xl">Q-Zone</h1>
        <div className="flex flex-col justify-center space-y-5">
          <img src={swimingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playgroundImg} alt="" />
          
        </div>
      </div>
      <img src={bgImg} alt="" className="mt-8 w-full" />
    </div>
  );
};

export default Qzone;
