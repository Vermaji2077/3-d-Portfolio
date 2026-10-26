import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  return (
    <ScrollVelocityContainer className={`overflow-hidden w-full h-16 sm:h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase ${className}`}>
      <ScrollVelocityRow 
        baseVelocity={5} 
        direction={reverse ? -1 : 1}
        className="flex items-center"
      >
        {items.map((text, index) => (
          <React.Fragment key={index}>
            <span className="px-3 sm:px-6 md:px-8 lg:px-12 whitespace-nowrap">
              {text}
            </span>
            <Icon icon={icon} className={`${iconClassName} mx-2 sm:mx-4 md:mx-6 lg:mx-12 flex-shrink-0 size-4 sm:size-5 md:size-6`} />
          </React.Fragment>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
};

export default Marquee;
