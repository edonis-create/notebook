import "./SearchInput.scss";

import React, { useState } from "react";

import { FontSize } from "../../foundation/FontSizes";

export type ISearchInputProps = React.ComponentProps<"input"> & {
  className?: string;
  fontSize?: FontSize;
};

const SearchInput: React.FunctionComponent<ISearchInputProps> = ({
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
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const inputClassNames = [`search flex-font-size-${fontSize}`, className].join(
    " "
  );

  return (
    <input
      className={inputClassNames}
      type="search"
      onChange={handleOnChange}
      value={currentValue}
      {...restProps}
    />
  );
};

export default SearchInput;
