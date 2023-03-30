import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ color, size }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={size ? size : 20}
          color={color ? color : "#FDAF3B"}
          className="mr-1"
        />
      ))}
    </div>
  );
};

export default Star;
