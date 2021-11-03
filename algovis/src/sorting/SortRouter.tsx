import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../routes';
import { HeapsortPage } from './HeapsortPage';
import { SortHomePage } from './SortHomePage';

export const SortRouter = () => {
  // TODO: 404 page
  return (
    <Switch>
      <Route exact path={ Routes.sorting }>
        <SortHomePage/>
      </Route>
      <Route path={ Routes.sortingRoutes.heapsort }>
        <HeapsortPage/>
      </Route>
    </Switch>
  )
}
