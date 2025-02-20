import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Artificial Intelligence Engineer",
          "Cloud Solutions Architect",
          "Big Data Analyst",
          "Medical Imaging Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
