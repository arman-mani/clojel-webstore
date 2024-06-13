import React from "react";
import { BiSolidError } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const iconMap = {
  product: MdOutlineProductionQuantityLimits,
  generic: BiSolidError,
};

const NotFound = (props) => {
  const IconComponent = iconMap[props.type] || BiSolidError;
  const navigate = useNavigate();

  const handlePath = () => {
    if (props.onClick) {
      props.onClick(props.path);
    }
    navigate(props.path);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-[600px]">
        <div className="flex flex-col items-center">
          <IconComponent size="60" />
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button
            onClick={handlePath}
            className="bg-black text-white py-2 px-6 transition-transform duration-300 transform hover:scale-110"
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;