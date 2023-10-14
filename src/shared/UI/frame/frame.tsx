import React from "react";
import cl from "./frame.module.scss";

interface FrameProps {
  children: React.ReactNode;
  h?: string;
}

const Frame = ({ children, h }: FrameProps) => {
  return (
    <div className={cl.frame} style={{ height: h }}>
      {children}
    </div>
  );
};

export { Frame };