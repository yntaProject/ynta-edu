import { InputHTMLAttributes } from "react";
import cl from "./input.module.scss";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClassName?: string;
}

const Input = ({ extraClassName, ...rest }: InputProps) => {
  return (
    <input type="text" {...rest} className={clsx(cl.input, extraClassName)}/>
  );
};

export { Input };