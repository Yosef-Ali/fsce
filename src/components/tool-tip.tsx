import React from "react";
import { motion } from "framer-motion";
import { Region } from "./regions";

interface AnimatedTooltipProps {
  region: Region;
  translateX: React.RefObject<number>;
  rotate: React.RefObject<number>;
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ region, translateX, rotate }) => {

  console.log(region.tooltiptext, translateX.current, rotate.current)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.6 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 10,
        },
      }}
      exit={{ opacity: 0, y: 20, scale: 0.6 }}
      style={{
        rotate: rotate,
        translateX: translateX,
        whiteSpace: "nowrap",
      }}

      className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 "
    >
      <GradientBackground
        className="absolute inset-x-10 z-30 w-[20%] -bottom-px "
        gradientFrom="transparent"
        gradientVia="emerald-500"
        gradientTo="transparent"
      />
      <GradientBackground
        className="absolute left-10 w-[40%] z-30 -bottom-px "
        gradientFrom="transparent"
        gradientVia="sky-500"
        gradientTo="transparent"
      />
      <div className="font-bold relative z-30 text-base border">{region.tooltiptext}</div>
      <div className="text-white text-xs">{region.tooltiptext}</div>
    </motion.div>
  );
};

interface GradientBackgroundProps {
  className: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  gradientFrom,
  gradientVia,
  gradientTo,
}) => {
  return <div className={`${className} bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} h-px`} />;
};

export default AnimatedTooltip;

