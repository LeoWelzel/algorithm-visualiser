import { SortingRoutes } from "./routes";

export enum SortingAlgorithmEnum {
  Quicksort,
  Mergesort,
  Heapsort,
  NumAlgorithms
}

export const getSortingAlgorithmName = (algorithmEnum: SortingAlgorithmEnum) =>
  algorithmEnum === SortingAlgorithmEnum.Quicksort ? 'Quicksort' :
  algorithmEnum === SortingAlgorithmEnum.Mergesort ? 'Mergesort' :
  algorithmEnum === SortingAlgorithmEnum.Heapsort ? 'Heapsort' : '';

export const getSortingAlgorithmDescription = (algorithmEnum: SortingAlgorithmEnum) =>
  algorithmEnum === SortingAlgorithmEnum.Quicksort ?
    'Quicksort is a divide-and-conquer algorithm that recursively selects a pivot element ' +
    'and ordering the rest of the sequence such that all elements to the pivot\'s left are smaller than it, ' +
    'whilst those to the pivot\'s right are larger than it.' :
  algorithmEnum === SortingAlgorithmEnum.Mergesort ?
    'Mergesort is a divide-and-conquer algorithm that recursively bisects the sequence until the result of such a bisection ' +
    'produces two ordered subsequences - typically when at least one is a singleton - at which point it merges the two.' :
  algorithmEnum === SortingAlgorithmEnum.Heapsort ?
    'Heapsort constructs a heap from the sequence - in this case a binary heap - and builds the sorted sequence ' +
    'by repeatedly removing the heap\'s root and updating the heap to maintain the heap property.' :
    '';

export const getSortingAlgorithmPath = (algorithmEnum: SortingAlgorithmEnum) =>
  algorithmEnum === SortingAlgorithmEnum.Quicksort ? SortingRoutes.quicksort :
  algorithmEnum === SortingAlgorithmEnum.Mergesort ? SortingRoutes.mergesort :
  algorithmEnum === SortingAlgorithmEnum.Heapsort ? SortingRoutes.heapsort : '';
