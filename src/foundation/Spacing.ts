const spaces = {
  none: "none",
  xxxs: "xxxs",
  xxs: "xxs",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  xxxl: "xxxl",
} as const;

export type Spaces = keyof typeof spaces;

export default Spaces;
