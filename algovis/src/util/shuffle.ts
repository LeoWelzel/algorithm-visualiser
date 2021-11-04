/**
 * Shuffles the array in-place.
 * @param array The array to shuffle.
 */
export const shuffle = (array: number[]) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}