const Breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export type Breakpoint = keyof typeof Breakpoints;
export default Breakpoints;
