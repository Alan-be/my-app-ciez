"use client";
import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
 
};


interface SVGElementBaseProps {
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  fill?: string;
}

interface PathElement extends SVGElementBaseProps {
  type: "path";
  props: {
    custom?: number;
    d: string;
  };
}

interface RectElement extends SVGElementBaseProps {
  type: "rect";
  props: {
    width: string;
    height: string;
    x: string;
    y: string;
    rx?: string;
    ry?: string;
  };
}

interface CircleElement extends SVGElementBaseProps {
  type: "circle";
  props: {
    cx: string;
    cy: string;
    r: string;
  };
}

interface PolylineElement extends SVGElementBaseProps {
  type: "polyline";
  props: {
    points: string;
  };
}

interface LineElement extends SVGElementBaseProps {
  type: "line";
  props: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
}

type SVGElement =
  | PathElement
  | RectElement
  | CircleElement
  | PolylineElement
  | LineElement;

interface Props {
  className: string;
  width: string;
  height: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  elements: SVGElement[];
}

const svgComponentMap: Record<string, any> = {
  path: motion.path,
  rect: motion.rect,
  circle: motion.circle,
  line: motion.line,
  polyline: motion.polyline,
  polygon: motion.polygon,
  ellipse: motion.ellipse,
};

export const AnimateSVG = (props: Props) => {
  return (
    <motion.svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2 }}
    >
      {props.elements.map((element, index) => {
        const MotionComponent = svgComponentMap[element.type] || motion.path;
        return (
          <MotionComponent
            key={index}
            {...element.props}
            variants={draw}
          
            custom={1}
          />
        );
      })}
    </motion.svg>
  );
};