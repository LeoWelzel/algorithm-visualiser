import { SortingAlgorithm, SortingType } from './sort';

/**
 * Performs the mergesort algorithm on an input.
 * @param array The array to perform mergesort on.
 * @returns A list of states the array transitioned through.
 */
export const mergesort: SortingAlgorithm = (array: SortingType[]) => {
  const arrayCopy = [...array];
  const arrayStates: SortingType[][] = [];

  helperMergesort(arrayStates, array, 0, arrayCopy.length);

  return arrayStates;
}

/**
 * Performs the mergesort algorithm on an input.
 * @param arrayStates The stored array of states the array has gone through. States are pushed to this.
 * @param array The array to perform mergesort on.
 * @param left The leftmost pointer.
 * @param right The rightmost pointer.
 */
const helperMergesort = (arrayStates: SortingType[][], array: SortingType[], left: number, right: number) => {
  if (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    helperMergesort(arrayStates, array, left, mid);
    helperMergesort(arrayStates, array, mid, right);
    merge(arrayStates, array, left, right, mid);
  }
}

/**
 * Merges the sorted lists on either side of the partition.
 * @param arrayStates The stored array of states the array has gone through. States are pushed to this.
 * @param array The array to partition.
 * @param left The leftmost pointer.
 * @param right The rightmost pointer.
 * @param mid The pointer to the middle of the array.
 */
const merge = (arrayStates: SortingType[][], array: SortingType[], left: number, right: number, mid: number) => {
  let leftIndex = left,
    rightIndex = mid;

  while (leftIndex < rightIndex && rightIndex < right) {
    if (array[leftIndex] >= array[rightIndex]) {
      const swapElement = array[rightIndex];

      for (let i = rightIndex; i > leftIndex; i--)
        array[i] = array[i - 1];

      array[leftIndex] = swapElement;
      rightIndex++;

      arrayStates.push([...array]);
    }
    leftIndex++;
  }
}
