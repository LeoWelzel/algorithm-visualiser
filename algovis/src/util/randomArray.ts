import { shuffleArray } from "./shuffle";

export const randomArray = (length: number) => {
  const arr = [];

  for (let i = 1; i <= length; i++)
    arr.push(i);

  shuffleArray(arr);

  return arr;
}