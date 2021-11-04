/**
 * Produces a random integer from `lower` to `upper`, inclusive on both.
 * @param lower The lower bound.
 * @param upper The upper bound.
 * @returns A random integer between the two.
 */
export const randomInt = (lower: number, upper: number) =>
  Math.floor(Math.random() * (upper + 1 - lower) + lower)
