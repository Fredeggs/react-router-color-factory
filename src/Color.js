import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();
  const colorObj = colors.find((c) => c.color === color);
  return (
    <div style={{ backgroundColor: colorObj.hex }}>
      <h1>THIS IS {colorObj.color.toUpperCase()}, ISN'T IT BEAUTIFUL?</h1>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
};

export default Color;
