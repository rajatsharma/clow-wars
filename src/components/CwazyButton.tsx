/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from "react";

const CwazyButton = ({ text, onClick }: any) => (
  <button className="cwazy-button" onClick={() => onClick()}>
    {text}
  </button>
);

export default CwazyButton;
