import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista de Sistema",
          "Desenvolvedor Full Stack",
          "Freelancer"        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
