import React, { useState } from "react";

import { FontSize } from "../../foundation/FontSizes";

export type ITextAreaProps = React.ComponentProps<"textarea"> & {
  className?: string;
  fontSize?: FontSize;
};

const TextArea: React.FunctionComponent<ITextAreaProps> = ({
  onChange,
  className,
  fontSize = "base",
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState("");
  const currentValue = restProps.value || inputValue;

  /**
   * A function that takes an event as an argument and sets the inputValue to the value of the event
   * target.
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const inputClassNames = [`flex-font-size-${fontSize}`, className].join(" ");

  return (
    <textarea
      className={inputClassNames}
      onChange={handleOnChange}
      value={currentValue}
      {...restProps}
    />
  );
};

export default TextArea;
