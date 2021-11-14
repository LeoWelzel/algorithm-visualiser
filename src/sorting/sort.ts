/**
 * The type of the arrays being sorted.
 */
export type SortingType = number;

/**
 * Base sorting algorithm type.
 * 
 * Algorithms sort the input array and output an array of transitionary states.
 */
export type SortingAlgorithm = (arr: SortingType[]) => SortingType[][];
