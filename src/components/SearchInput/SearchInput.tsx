import React, { useState } from "react";

import { FontSize } from "../../foundation/FontSizes";

export type ISearchInputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  iconClassName?: string;
  className?: string;
  inputClassName?: string;
  fontSize?: FontSize;
};

const SearchInput: React.FunctionComponent<ISearchInputProps> = ({
  onChange,
  icon: Icon = null,
  iconClassName,
  className,
  inputClassName,
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

  const classNames = [`search`, className].join(" ");
  const inputClassNames = [`flex-font-size-${fontSize}`, inputClassName].join(
    " "
  );

  return (
    <div className={classNames}>
      {Icon && <div className={iconClassName}>{Icon}</div>}
      <input
        className={inputClassNames}
        type="search"
        onChange={handleOnChange}
        value={currentValue}
        {...restProps}
      />
    </div>
  );
};

export default SearchInput;
