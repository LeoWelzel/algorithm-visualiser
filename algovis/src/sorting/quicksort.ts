import { SortingAlgorithm, SortingType } from './sort';

/**
 * Performs the quicksort algorithm on an input.
 * @param array The array to perform quicksort on.
 * @returns A list of states the array transitioned through.
 */
export const quicksort: SortingAlgorithm = (array: SortingType[]) => {
  const arrayCopy = [...array];
  const arrayStates: SortingType[][] = [];

  helperQuicksort(arrayStates, array, 0, arrayCopy.length);

  return arrayStates;
}

/**
 * A helper quicksort function that sorts the array and outputs its states.
 * @param arrayStates The stored array of states the array has gone through. States are pushed to this.
 * @param array The array to perform quicksort on.
 * @param left The leftmost pointer.
 * @param right The rightmost pointer.
 */
const helperQuicksort = (arrayStates: SortingType[][], array: SortingType[], left: number, right: number) => {
  if (left < right) {
    const pivot = partition(arrayStates, array, left, right);
    helperQuicksort(arrayStates, array, left, pivot);
    helperQuicksort(arrayStates, array, pivot + 1, right);
  }
}

/**
 * Partitions the input array.
 * @param arrayStates The stored array of states the array has gone through. States are pushed to this.
 * @param array The array to partition.
 * @param left The leftmost pointer.
 * @param right The rightmost pointer.
 * @returns The index of the array pivot.
 */
const partition = (arrayStates: SortingType[][], array: SortingType[], left: number, right: number): number => {
  const pivot = array[left];

  let i = left + 1,
    j = right;

  while (i < j)
    if (array[i] < pivot)
      ++i;
    else {
      if (i !== j - 1) {
        [array[i], array[j - 1]] = [array[j - 1], array[i]];
        arrayStates.push([...array]);
      }
      j--;
    }

  if (left !== i - 1) {
    /* Swap these two values. */
    [array[left], array[i - 1]] = [array[i - 1], array[left]];
    arrayStates.push([...array]);
  }

  return i - 1;
}
