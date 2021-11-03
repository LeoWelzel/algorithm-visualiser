import { SortingAlgorithm, SortingType } from './sort';

/**
 * Performs the heapsort algorithm on an input.
 * @param array The array to perform heapsort on.
 * @returns A list of states the array transitioned through.
 */
export const Heapsort: SortingAlgorithm = (array: SortingType[]) => {
  const arrayCopy = [...array];
  const arrayStates: SortingType[][] = [];

  helperHeapsort(arrayStates, array, 0, arrayCopy.length);

  return arrayStates;
}

/**
 * Performs the heapsort algorithm on an input.
 * @param arrayStates The stored array of states the array has gone through. States are pushed to this.
 * @param array The array to perform heapsort on.
 * @param left The leftmost pointer.
 * @param right The rightmost pointer.
 */
const helperHeapsort = (arrayStates: SortingType[][], array: SortingType[], left: number, right: number) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--)
    heapify(arrayStates, array, array.length, i);

  for (let i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]];
    arrayStates.push([...array]);
    heapify(arrayStates, array, i, 0);
  }
}

/**
 * Heapifies the array.
 */
const heapify = (arrayStates: SortingType[][], array: SortingType[], length: number, i: number) => {
  let largest = i,
    left = 2 * i + 1,
    right = 2 * i + 2;

  if (left < length && array[largest] < array[left])
    largest = left;

  if (right < length && array[largest] < array[right])
    largest = right;

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    arrayStates.push([...array]);
    heapify(arrayStates, array, length, largest);
  }
}
