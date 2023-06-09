const BREAKPOINTS = {
  xs: 420,
  sm: 576,
  md: 768,
  lg: 900,
  xl: 1200,
  xxl: 1536,
}

type Mq = keyof typeof BREAKPOINTS

export const mq = Object.keys(BREAKPOINTS)
  .map(key => [key, BREAKPOINTS[key as Mq]] as [Mq, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)` 
    return prev
  }, {} as Record<Mq, string>)

