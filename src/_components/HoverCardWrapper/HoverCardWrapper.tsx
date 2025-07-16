import React, { ReactNode } from "react";
import styles from "./HoverCardWrapper.module.css";

interface HoverCardWrapperProps {
  children: ReactNode;
  hoverContent: ReactNode;
}

const HoverCardWrapper: React.FC<HoverCardWrapperProps> = ({ children, hoverContent }) => {
  return (
    <div className={`${styles.wrapper} relative overflow-hidden rounded-xl cursor-pointer w-full`}>
      <div className="relative z-10 w-full">{children}</div>
      <div className={`${styles.hoverOverlay} absolute inset-0 z-20 flex items-center px-4 w-full`}>
        {hoverContent}
      </div>
    </div>
  );
};

export default HoverCardWrapper;
