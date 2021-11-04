import { SortingRoutes } from "./routes";

export enum SortingAlgorithmEnum {
  Quicksort,
  Mergesort,
  Heapsort,
  NumAlgorithms
}

export const getSortingAlgorithmText = (algorithmEnum: SortingAlgorithmEnum) =>
  algorithmEnum === SortingAlgorithmEnum.Quicksort ? 'Quicksort' :
  algorithmEnum === SortingAlgorithmEnum.Mergesort ? 'Mergesort' :
  algorithmEnum === SortingAlgorithmEnum.Heapsort ? 'Heapsort' : '';

export const getSortingAlgorithmPath = (algorithmEnum: SortingAlgorithmEnum) =>
  algorithmEnum === SortingAlgorithmEnum.Quicksort ? SortingRoutes.quicksort :
  algorithmEnum === SortingAlgorithmEnum.Mergesort ? SortingRoutes.mergesort :
  algorithmEnum === SortingAlgorithmEnum.Heapsort ? SortingRoutes.heapsort : '';
