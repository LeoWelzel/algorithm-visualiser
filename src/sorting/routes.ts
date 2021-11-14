import { Routes } from '../routes';

const heapsort = '/heapsort';
const mergesort = '/mergesort';
const quicksort = '/quicksort';

export const SortingRoutes = {
  heapsort: Routes.sorting + heapsort,
  mergesort: Routes.sorting + mergesort,
  quicksort: Routes.sorting + quicksort
}
