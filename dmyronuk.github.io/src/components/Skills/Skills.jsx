import React, { useEffect, useRef } from "react";
import initThree from "./init";
import "./Skills.css";

const Skills = () => {
  const threeContainer = useRef(null);

  useEffect(() => {
    initThree(threeContainer.current);
  }, []);

  return (
    <div
      className="flex-row justify-content-center flex-1 three-container"
      ref={threeContainer}
    />
  );
};

export default Skills;