import React from "react";
import { BallCanvas } from "./canvas"; // your existing 3D Ball component
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import useIsMobile from "../hooks/useIsMobile"; // <- NEW

const Tech = () => {
  const isMobile = useIsMobile(); // will be true if screen < 768px

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            // ✅ Fallback: image or styled div
            <div className="bg-tertiary rounded-full flex items-center justify-center w-full h-full shadow-lg">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          ) : (
            // ✅ Desktop: show 3D ball
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
