import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { DefaultPage } from '../DefaultPage';
import { Routes } from '../routes';
import { HeapsortPage } from './HeapsortPage';
import { SortHomePage } from './SortHomePage';

export const SortRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ Routes.sorting }>
          <SortHomePage/>
        </Route>
        <Route path={ Routes.sortingRoutes.heapsort }>
          <HeapsortPage/>
        </Route>
        <Route path={'*'}>
          <DefaultPage/>
        </Route>
      </Switch>
    </div>
  )
}
