/**
 * Filthy workaround because export namespaces don't want to work with babel.
 * 
 * Possibly helpful links:
 * https://stackoverflow.com/questions/58783699/namespace-not-marked-type-only-declare-babel-typescript
 * https://github.com/tensorflow/tfjs/issues/2400
 * https://babeljs.io/docs/en/babel-plugin-transform-typescript
 */

const home = '/';
const about = '/about';

const sorting = '/sorting';
// const heapsort = '/heapsort';
// const mergesort = '/mergesort';
// const quicksort = '/quicksort';

// const sortingRoutes = {
//   heapsort: sorting + heapsort,
//   mergesort: sorting + mergesort,
//   quicksort: sorting + quicksort
// }

export const Routes = {
  home: home,
  about: about,
  sorting: sorting,
}


