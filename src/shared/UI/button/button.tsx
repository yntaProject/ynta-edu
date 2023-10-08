import React, { ButtonHTMLAttributes } from "react";
import cl from "./button.module.scss";
import arrowRight from "../../../../public/assets/images/arrow-right.svg";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "outlined";
  children: React.ReactNode;
  extraClassName?: string;
}

const Button = ({ variant, extraClassName, children, ...rest }: ButtonProps) => {
  const styles = variant === "primary" ? cl.buttonPrimary : cl.buttonOutlined;
  return (
    <button className={clsx(extraClassName, styles)} {...rest}>
      {children}
      {variant === "outlined" &&
        <img src={arrowRight} alt="arrow left" className={cl.arrowRight}/>}
    </button>
  );
};

export { Button };