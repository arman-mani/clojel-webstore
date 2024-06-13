import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[600px]">
      <img src={loading} alt="Loading" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto" />
    </div>
  );
};

export default Loading;
