import React from "react";
import loading123 from "./../../assets/animation/animation_loading.json";
import Lottie from "react-lottie";
const LoaDing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading123,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className="h-screen w-ful text-center  opacity-50 fixed flex items-center"
      style={{ zIndex: "9999" }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoaDing;
