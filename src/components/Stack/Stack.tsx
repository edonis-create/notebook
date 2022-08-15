import "./Stack.scss";
import "../NotesCardList/NotesCardList.scss";

import {
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
} from "./StackProperties";

import React from "react";

interface IStackProps {
  children?: React.ReactNode;
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: FlexAlignItems;
  className?: string;
}
const Stack: React.FunctionComponent<IStackProps> = ({
  children,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  className: classNameProp,
}) => {
  const className = [
    `flex flex-${direction} flex-justify-${justifyContent} flex-align-${alignItems} `,
    classNameProp,
  ].join(" ");
  return <div className={className}>{children}</div>;
};
export default Stack;
