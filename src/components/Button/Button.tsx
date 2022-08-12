import "./Button.scss";

import { FontSize } from "../../foundation/FontSizes";
import React from "react";
import Spaces from "../../foundation/Spacing";

type DesignType = "primary" | "secondary" | "icon";

export type ButtonType = React.ComponentProps<"button"> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  designType?: DesignType;
  labelClassName?: string;
  iconClassName?: string;
  label?: string;
  width?: Spaces;
  height?: Spaces;
  fontSize?: FontSize;
};
const Button = (props: ButtonType): JSX.Element => {
  const {
    leftIcon: LeftIcon = null,
    rightIcon: RightIcon = null,
    iconClassName,
    className,
    style,
    label,
    labelClassName,
    designType = "primary",
    width = "xxl",
    height = "md",
    fontSize,
    ...rest
  } = props;

  const buttonClassName = [
    `button button-${designType} flex-width-${width} flex-height-${height}`,
    className,
  ].join(" ");

  return (
    <button className={buttonClassName} {...rest} style={{ ...style }}>
      {LeftIcon && (
        <div
          className={`button-icon__left  ${iconClassName ? iconClassName : ""}`}
        >
          {LeftIcon}
        </div>
      )}
      {label && (
        <div
          className={`button-label_container flex-font-size-${fontSize} ${
            labelClassName ? labelClassName : ""
          }`}
        >
          {label}
        </div>
      )}
      {RightIcon && (
        <div
          className={`button-icon__right   ${
            iconClassName ? iconClassName : ""
          }`}
        >
          {RightIcon}
        </div>
      )}
    </button>
  );
};
export default Button;
