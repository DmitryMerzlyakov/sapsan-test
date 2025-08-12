import React from "react";

import style from "./style.module.css";

export interface IInputProps {
  inputPlaceholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
  value: string;
  iconPlaceholder: React.ReactNode;
  iconClear: React.ReactNode;
}

export const Input = React.forwardRef(
  (
    { iconPlaceholder, value, onChange, inputPlaceholder, iconClear, onClear }: IInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={style.input_wrapper}>
        <input
          className={style.input}
          onChange={onChange}
          placeholder={inputPlaceholder}
          value={value}
          ref={ref}
        />
        <span className={style.input_icon_placeholder}>{iconPlaceholder}</span>
        {value && <button 
          className={style.input_icon_clear}
          onClick={onClear}
        >
          {iconClear}
        </button>}
      </div>
    );
  }
);
