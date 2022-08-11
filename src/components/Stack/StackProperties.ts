export const flexDirection = {
  row: "row",
  column: "column",
  rowReverse: "row-reverse",
  columnReverse: "column-reverse",
} as const;

type FlexDirectionKeys = keyof typeof flexDirection;
export type FlexDirection = typeof flexDirection[FlexDirectionKeys];

export const flexJustifyContent = {
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
} as const;

type FlexJustifyContentKeys = keyof typeof flexJustifyContent;
export type FlexJustifyContent =
  typeof flexJustifyContent[FlexJustifyContentKeys];

export const flexAlignItems = {
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
} as const;

type FlexAlignItemsKeys = keyof typeof flexAlignItems;
export type FlexAlignItems = typeof flexAlignItems[FlexAlignItemsKeys];
