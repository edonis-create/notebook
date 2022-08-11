const fontSize = {
  xs: "xs",
  //12px
  sm: "sm",
  // 14px
  base: "base",
  //16px
  lg: "lg",
  //18px
  xl: "xl",
  //24px
} as const;

export type FontSize = typeof fontSize[keyof typeof fontSize];

export default fontSize;
